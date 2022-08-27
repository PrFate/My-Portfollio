const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        scrollbar: './src/scrollbar.js',
        sparks: './src/sparks.js',
        skillAnimations: './src/skillAnimations.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
          },
      compress: true,
      port: 9000,
      hot: true
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
      },
  };