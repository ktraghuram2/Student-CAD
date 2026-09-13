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
console.log('Bundle assets successfully mirrored to root /assets for direct GitHub Pages compatibility.');
