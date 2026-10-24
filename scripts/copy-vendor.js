// Copia three.js (e a fonte, se existir) para src/vendor, para o jogo funcionar offline.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'src', 'vendor');
fs.mkdirSync(out, { recursive: true });

const three = path.join(root, 'node_modules', 'three', 'build', 'three.min.js');
if (!fs.existsSync(three)) {
  console.error('three.js não encontrado. Corre primeiro: npm install');
  process.exit(1);
}
fs.copyFileSync(three, path.join(out, 'three.min.js'));
console.log('three.js copiado para src/vendor');

const font = path.join(root, 'node_modules', '@fontsource', 'pixelify-sans', 'files', 'pixelify-sans-latin-400-normal.woff2');
if (fs.existsSync(font)) {
  fs.copyFileSync(font, path.join(out, 'pixelify-sans.woff2'));
  console.log('Fonte Pixelify Sans copiada');
} else {
  console.warn('Fonte Pixelify Sans não encontrada; o jogo usa a fonte de recurso.');
}
