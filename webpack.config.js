var path = require('path')
var webpack = require("webpack");
module.exports = {
      entry: "./src/index.js",
      output: {
            //path: "./dist/assets",
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
            publicPath: "assets"
      },
      
      devServer: {
            inline: true,
            contentBase: './',
            port: 3000
      },
      
      module: {
//            loaders: [
//                  {
//                        test: /\.js$/,
//                        exclude: /(node_modules)/,
//                        loader: ["babel-loader"],
//                        query: {
//                              presets: ["latest", "stage-0", "react"]
//                        }
//                  }
//            ]
            rules: [
                  {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        loader: "babel-loader",
                        options: {
                              presets: ["latest", "stage-0", "react"]
                        }
                  }
            ]
      }
}