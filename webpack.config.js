module.exports = {
    "compilerOptions": {
         "types": ["@types/**"],
      },

    rules: [{
        test: /\.less$/,
        use: [{
            loader: 'style-loader',
        }, {
            loader: 'css-loader', // translates CSS into CommonJS
        }, {
            loader: 'less-loader', // compiles Less to CSS
        }],
    }],
}