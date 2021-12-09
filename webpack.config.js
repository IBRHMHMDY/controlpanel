const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    entry: {
        'app' : './src/index.js',

    },
    output: {
        path: path.join(__dirname, "/app"),
        filename: "assets/js/app.js",
    },
    devServer: {
        port: 2022,
        liveReload: true,
    },
    module:{
        rules: 
        [
            {
                test: /\.html$/,
                use:
                [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                exclude: /fonts/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "assets/images",
                    }
                  }
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "assets/fonts",
                    }
                  }
                ]
              },
        ]
    },

    plugins: [
        new htmlwebpackplugin({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new CleanWebpackPlugin(),

        new CssMinimizerPlugin({}),

        new MiniCssExtractPlugin({
            filename: "assets/css/styles.css",
        }),


    ]
}