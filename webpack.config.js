module.exports = {
    devtool: "eval-source-map",
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" },
            { test: /\.css?$/, loader: "style!css?modules" },
            
        ]
    }
};