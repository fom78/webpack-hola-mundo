const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test:/\.html$/i,
            use: [
                {
                    loader:"html-loader",
                    options: {
                        minimize:true,
                    }
                }
            ]
        },
        {
            test:/\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin()
    ]

  }