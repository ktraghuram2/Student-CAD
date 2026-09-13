const fs = require('fs');
const path = require('path');

const distAssets = path.join(__dirname, 'dist', 'assets');
const rootAssets = path.join(__dirname, 'assets');

if (!fs.existsSync(rootAssets)) {
  fs.mkdirSync(rootAssets, { recursive: true });
}

const files = fs.readdirSync(distAssets);
for (const file of files) {
  if (file.endsWith('.js')) {
    fs.copyFileSync(path.join(distAssets, file), path.join(rootAssets, 'index.js'));
    console.log(`Copied ${file} -> assets/index.js`);
  } else if (file.endsWith('.css')) {
    fs.copyFileSync(path.join(distAssets, file), path.join(rootAssets, 'index.css'));
    console.log(`Copied ${file} -> assets/index.css`);
  }
}

const rootIndexHtml = path.join(__dirname, 'index.html');
const distIndexHtml = path.join(__dirname, 'dist', 'index.html');
if (fs.existsSync(rootIndexHtml)) {
  fs.copyFileSync(rootIndexHtml, distIndexHtml);
  console.log('Copied index.html -> dist/index.html');
}

console.log('Bundle assets and index.html successfully synchronized for both root and dist GitHub Pages deployments.');
