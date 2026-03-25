const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'out');

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

console.log('Building...');
execSync('npx next build', { stdio: 'inherit', cwd: ROOT });

console.log('Cleaning old deploy files...');
for (const name of ['static-assets', '404', '404.html', 'about', 'contact', 'projects', 'images', 'api', 'index.html', 'index.txt', 'icon.svg', 'favicon.ico']) {
  removeIfExists(path.join(ROOT, name));
}

console.log('Copying built files to root...');
for (const item of fs.readdirSync(OUT)) {
  if (item === '_next') continue;
  copyRecursive(path.join(OUT, item), path.join(ROOT, item));
}

console.log('Copying _next → static-assets/_next...');
copyRecursive(path.join(OUT, '_next'), path.join(ROOT, 'static-assets', '_next'));

console.log('Deploy files ready. Commit and push to deploy.');
