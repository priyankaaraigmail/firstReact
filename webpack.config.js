const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  stats: {
    chunks: true
  },
  devServer: {
    publicPath: '/public',
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
		    enforce: 'pre',
		    test: /\.js$/,
		    loader: 'eslint-loader',
		    exclude: /node_modules/
	  },
	  {
	  	test:/\.json$/,
	  	loader: 'json-loader'
	  },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
      test: /\.css$/,
	  use: [
	    'style-loader',
	    {
	      loader: 'css-loader',
	      options: {
	        url: false
	      }
	    }
	  ]
      }
    ]
  }
}
