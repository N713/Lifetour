const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./source/js/script.js`,
  output: {
    filename: `script.js`,
    path: path.join(__dirname, `build`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `build`),
    compress: true,
    watchContentBase: true
  }
};
