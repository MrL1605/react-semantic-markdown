const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: {
                    loader: "css-loader",
                },
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '',
        filename: 'build.js',
        libraryTarget: 'umd'
    }
};
