var path = require("path");

var DIST_DIR = path.resolve(__dirname, "app/design/frontend/Reactor/default/web/dist");
var SRC_DIR = path.resolve(__dirname, "app/design/frontend/Reactor/default/web/application");

var config = {
    entry: SRC_DIR + "/app.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;
