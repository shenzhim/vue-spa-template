const path = require('path');
const scss = require('postcss-scss');
const precss = require('precss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postImport = require('postcss-import');
const postPxtorem = require('postcss-pxtorem');

let plugins = [
  postImport({
    path: [path.join(__dirname, './src/css')],
    resolve(id) {
        let name = path.basename(id);
        if (!/^_/.test(name)) {
            id = path.dirname(id) + '/_' + name;
        }
        return id;
    }
  }),
  precss(),
  postPxtorem({
    rootValue: 100,
    unitPrecision: 5, // 保留5位小数字
    minPixelValue: 2, // 小于 2 时，不转换
    selectorBlackList: [], // 选择器黑名单，可以使用正则
    propWhiteList: [] // 属性名称为空，表示替换所有属性的值
  }),
  autoprefixer({
    browsers: ['> 1%', 'android >=4', 'ios >=8']
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(cssnano({
    safe: true
  }));
}

module.exports = {
  parser: scss,
  plugins: plugins
}
