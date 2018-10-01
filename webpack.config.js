const { resolve }           = require('path');
const webpack               = require('webpack');
const merge                 = require('webpack-merge');
const autoprefixer          = require('autoprefixer');
const HtmlWebpackPlugin     = require('html-webpack-plugin');

const prod = process.env.NODE_ENV === 'production' ? true : false;

const commonConfig = {
    output: {
        path:     resolve(__dirname, 'public'),
        pathinfo: !prod,
    },

    context: resolve(__dirname),

    devtool: prod ? 'source-map' : 'cheap-module-eval-source-map',

    bail: prod,

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            },
            {
                test: /\.(svg|jpg|png|ico)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            inject:     'body',
            filename: 'index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.css|scss/,
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['last 2 versions']
                    })
                ]
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    resolve: {
        extensions: ['.js', '.json', '.css', '.scss']
    },
}

if (prod) {
    console.log('Building for prod...');

    module.exports = merge( commonConfig, {
        mode: 'production',

        entry: [
            'whatwg-fetch',
            resolve(__dirname, 'client/index.js')
        ],

        output: {
            filename: 'js/bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                }
            ]
        },
    });
} else {
    console.log('Serving locally...');

    module.exports = merge(commonConfig, {
        mode: 'development',

        entry: [
            'whatwg-fetch',
            'webpack-hot-middleware/client',
            resolve(__dirname, 'src/client/index.js'),
        ],

        output: {
            filename: 'js/bundle.js',
        },

        module: {
            rules: [
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                }
            ]
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
    });
}