const path = require("path");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        './src/index.ts'
     ] ,
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    mode: "development"
};