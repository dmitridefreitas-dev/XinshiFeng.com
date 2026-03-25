/**
 * Deploy script for Hostinger.
 * 
 * Run: npm run deploy
 * Then drag the contents of the "deploy" folder into public_html.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'out');
const DEPLOY = path.join(ROOT, 'deploy');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function replaceInAllFiles(dir, search, replace) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      replaceInAllFiles(full, search, replace);
    } else if (/\.(html|js|css|txt|json)$/i.test(entry)) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes(search)) {
        fs.writeFileSync(full, content.split(search).join(replace), 'utf8');
      }
    }
  }
}

// 1. Build
console.log('\n=== Building site ===\n');
execSync('npx next build', { stdio: 'inherit', cwd: ROOT });

// 2. Clean old deploy folder
if (fs.existsSync(DEPLOY)) fs.rmSync(DEPLOY, { recursive: true, force: true });

// 3. Copy entire out/ to deploy/
console.log('\n=== Creating deploy folder ===\n');
copyRecursive(OUT, DEPLOY);

// 4. Rename _next → assets (Hostinger blocks _next on custom domains)
const oldDir = path.join(DEPLOY, '_next');
const newDir = path.join(DEPLOY, 'assets');
if (fs.existsSync(oldDir)) {
  fs.renameSync(oldDir, newDir);
  console.log('Renamed _next → assets');
}

// 5. Replace all /_next/ references with /assets/
console.log('Replacing references...');
replaceInAllFiles(DEPLOY, '/_next/', '/assets/');

// 6. Write .htaccess for clean routing
fs.writeFileSync(path.join(DEPLOY, '.htaccess'), `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`);

console.log('\n=== DONE ===');
console.log('Drag everything inside the "deploy" folder into public_html on Hostinger.\n');
