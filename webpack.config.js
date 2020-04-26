const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const {HotModuleReplacementPlugin} = require('webpack');

const styleLoader = process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader

module.exports = {
    context: path.join(__dirname, 'src/main/view'),
    mode: 'development',
    entry: {
        index: ['@babel/polyfill', './index.js']
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src', 'main', 'view')
        }
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        hotOnly: true
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'resources/js/[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: false,
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            title: 'Hot Module Replacement'
        }),
        new MiniCssExtractPlugin({
            filename: 'resources/css/styles.css'
        }),
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin({
            multiSteps: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: '/node_modules/',
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                        ],
                        cacheDirectory: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(scss)$/,
                use: [styleLoader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|png|ico|jpe?g)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            }
        ]
    }
}