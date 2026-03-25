const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'out');
const ASSETS_DIR = 'next-assets';

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
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

function removeIfExists(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function replaceInFile(filePath, search, replace) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(search)) {
    fs.writeFileSync(filePath, content.split(search).join(replace), 'utf8');
  }
}

function replaceInAllFiles(dir, search, replace) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      replaceInAllFiles(full, search, replace);
    } else if (/\.(html|js|css|txt|json)$/.test(entry)) {
      replaceInFile(full, search, replace);
    }
  }
}

console.log('1. Building...');
execSync('npx next build', { stdio: 'inherit', cwd: ROOT });

console.log('2. Cleaning old deploy files...');
for (const name of [ASSETS_DIR, 'static-assets', '_next', '404', '404.html', 'about', 'contact', 'projects', 'images', 'api', 'index.html', 'index.txt', 'icon.svg', 'favicon.ico']) {
  removeIfExists(path.join(ROOT, name));
}

console.log('3. Copying HTML pages and assets to root...');
for (const item of fs.readdirSync(OUT)) {
  if (item === '_next') continue;
  copyRecursive(path.join(OUT, item), path.join(ROOT, item));
}

console.log('4. Copying _next → ' + ASSETS_DIR + ' (no underscore)...');
copyRecursive(path.join(OUT, '_next'), path.join(ROOT, ASSETS_DIR));

console.log('5. Replacing /_next/ → /' + ASSETS_DIR + '/ in all files...');
replaceInAllFiles(ROOT, '/_next/', '/' + ASSETS_DIR + '/');
replaceInAllFiles(path.join(ROOT, ASSETS_DIR), '/_next/', '/' + ASSETS_DIR + '/');

console.log('Done. Commit and push to deploy.');
