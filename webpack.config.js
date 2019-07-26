let path = require('path');

module.exports={
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    // devtool : 'hidden-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8030
    }
}