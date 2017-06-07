const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    //'webpack/hot/only-dev-server', // Enable hot reloading
    './app/front/index.js' // This is where Webpack will be looking for the entry index.js file
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015','react'],
            plugins: [
              'transform-es2015-destructuring',
              'transform-es2015-parameters',
              ['transform-object-rest-spread', { 'useBuiltIns': true }],
            ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: 'url-loader?limit=30000&name=build/fonts/[name]-[hash].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=30000&name=build/images/[name]-[hash].[ext]'
      }
    ]
  },
  plugins: [],
  externals: {
    'Config': JSON.stringify(process.env.ENV === 'production' ? {
      REST_API_URL: "https://intense-atoll-30176.herokuapp.com"
    } : {
      REST_API_URL: "http://localhost:8000"
    })
  }
}
