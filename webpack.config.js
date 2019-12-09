const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:["font-awesome/less/font-awesome.less","./src/index.js"],
    output: {
        path:path.join(__dirname,"todolist"),
        filename: "bundled.js"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader', "image-webpack-loader"],
            },
            { 
                test: /\.less$/,
                use: [ 
                    'style-loader',
                    'css-loader', 
                    'less-loader'
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options:{
                    limit:8192,
                    name:'[name].[ext]',
                    outputPath:'assets'
                }

            }
            ]
        },
    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html"})]
}