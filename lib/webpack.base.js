const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const projectRoot = process.cwd();

const entry = {'app': path.join(projectRoot, "./src/index.js")}

// const setMPA = () => {
//   const entry = {};
//   const htmlWebpackPlugins = [];
//   const entryFiles = glob.sync(path.join(projectRoot, "./src/*/index.js"));

//   Object.keys(entryFiles).map(index => {
//     const entryFile = entryFiles[index];
//     // '/Users/cpselvis/my-project/src/index/index.js'

//     const match = entryFile.match(/src\/(.*)\/index\.js/);
//     const pageName = match && match[1];

//     entry[pageName] = entryFile;
//     return htmlWebpackPlugins.push(
//       new HtmlWebpackPlugin({
//         inlineSource: ".css$",
//         template: path.join(projectRoot, `./src/${pageName}/index.html`),
//         filename: `${pageName}.html`,
//         chunks: ["vendors", pageName],
//         inject: true,
//         minify: {
//           html5: true,
//           collapseWhitespace: true,
//           preserveLineBreaks: false,
//           minifyCSS: true,
//           minifyJS: true,
//           removeComments: false
//         }
//       })
//     );
//   });

//   return {
//     entry,
//     htmlWebpackPlugins
//   };
// };

// const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
  entry: entry,
  output: {
    path: path.join(projectRoot, "dist"),
    filename: "[name]_[hash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["url-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(projectRoot, 'public/index.html')
    })
  ]
};
