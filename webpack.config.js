module.exports = {
    devtool: "eval-source-map",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "uglify!babel-loader" }
        ]
    }
};