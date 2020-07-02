const path = require("path");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // entry: `./${entryPath}/${entryFile}`,
    entry: './src/index.js',
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        contentBase: [path.join(__dirname, 'build'), path.join(__dirname,'public')],
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use:["html-loader"]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "imgs"
                    }
            }
        }
            
        ]
    }
};