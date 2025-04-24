//be default it will start or fetch src/index.js

let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'), //to load the index html file on request

config = {
    output: {
        path: path.join(__dirname, '/dist'), //dist - distribution
        filename: 'bundle.js' //the file name will be bundle.js
    },
    devServer: {
        port: 9090, //localhost:9090
        historyApiFallback : true //localhost:9090/user -  works as a server to respond with index.html for any request
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource', //the file with above extension will go to this path
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] //localhost:9090 - loads this html
}

module.exports = config;