const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./src/index.js",
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
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html"})]
}