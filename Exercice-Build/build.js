const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function deleteAndMkdir(dirPath) {
  await fs.remove(dirPath);
  await fs.mkdir(dirPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.appendFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  const buffer = await fs.readFile(indexHtmlPath);
  let content = buffer.toString();

  content = content.replace(
    '<script src="./js/horloge.js"></script>',
    '<script src="./app.js"></script>',
  );
  content = content.replace('<script src="./js/index.js"></script>', '');

  await fs.appendFile(indexHtmlDistPath, content);
}

(async () => {
  console.time('Build Done');
  await deleteAndMkdir(distPath);
  await Promise.all([
    buildJs(),
    buildHtml(),
  ]);
  console.timeEnd('Build Done');
})();
