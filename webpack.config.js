module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    module: {
      rules: [
        { 
          test: [/\.jsx$/], 
          exclude: [/node_modules/, /database/],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader','css-loader'
          ]
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
    }
  };

    //   /\.(sa|sc|c)ss$/
    //       //   /\.css$/i