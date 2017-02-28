const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      { test: /\.(woff|woff2)$/, loaders: ['url-loader?name=webfonts/[name].[ext]'] },
      { test: /\.(png|jpg|jpeg|svg)$/, loaders: ['file-loader?name=images/[name].[ext]'] },
      { test: /\.pug$/, loaders: ['pug-loader'] },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    })
  ]
};
