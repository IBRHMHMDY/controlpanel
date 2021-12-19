const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
    entry: {
        'app' : './src/index.js',
        'assets/js/banner' : './src/assets/js/banner.js',
        'assets/js/tabs' : './src/assets/js/tabs.js',
        'assets/js/upload' : './src/assets/js/upload.js',
        'assets/js/chart' : './src/assets/js/chart.js',

    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
     },
    output: {
        path: path.join(__dirname, "/app"),
        filename: "[name].js",
    },
    devServer: {
        port: 2022,
        hot: false,
        liveReload: true,
        devMiddleware: { writeToDisk: true },
    },
    module:{
        rules: 
        [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
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
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
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
            chunks: ['app','assets/js/banner','assets/js/tabs','assets/js/chart']
        }),
        new htmlwebpackplugin({
            filename: "add-product.html",
            template: "./src/add-product.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "products.html",
            template: "./src/products.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "users.html",
            template: "./src/users.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "add-user.html",
            template: "./src/add-user.html",
            chunks: ['app','assets/js/upload']
        }),
        new htmlwebpackplugin({
            filename: "orders.html",
            template: "./src/orders.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "components/button.html",
            template: "./src/components/button.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "components/textfield.html",
            template: "./src/components/textfield.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "components/card.html",
            template: "./src/components/card.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "components/banner.html",
            template: "./src/components/banner.html",
            chunks: ['app', 'assets/js/banner']
        }),
        new htmlwebpackplugin({
            filename: "components/list.html",
            template: "./src/components/list.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "components/tabs.html",
            template: "./src/components/tabs.html",
            chunks: ['app', 'assets/js/tabs']
        }),
        new htmlwebpackplugin({
            filename: "components/upload.html",
            template: "./src/components/upload.html",
            chunks: ['app', 'assets/js/upload']
        }),
        new htmlwebpackplugin({
            filename: "components/help.html",
            template: "./src/components/help.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "components/summary.html",
            template: "./src/components/summary.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "components/actions.html",
            template: "./src/components/actions.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "components/sidebar.html",
            template: "./src/components/sidebar.html",
            chunks: ['app']
        }),
        new htmlwebpackplugin({
            filename: "components/table.html",
            template: "./src/components/table.html",
            chunks: ['app']
        }),

        new htmlwebpackplugin({
            filename: "components/charts.html",
            template: "./src/components/charts.html",
            chunks: ['app', 'assets/js/chart']
        }),
        new CleanWebpackPlugin(),

        new CssMinimizerPlugin({}),

        new MiniCssExtractPlugin({
            filename: "assets/css/styles.css",
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/sidebar.html'),
            location: 'sidebar',
            template_filename: ['index.html','add-product.html','products.html','users.html','orders.html','add-user.html'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/banner.html'),
            location: 'banner',
            template_filename: ['index.html'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/charts.html'),
            location: 'charts',
            template_filename: ['index.html'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/help.html'),
            location: 'help',
            template_filename: ['index.html','add-product.html','products.html','users.html','orders.html','add-user.html'],
        }),

    ]
}