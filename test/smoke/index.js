const path = require("path");
const webpack = require("webpack");
const rimraf = require("rimraf");
const Mocha = require('mocha')

const mocha = new Mocha({
    timeout: '10000ms'
})

process.chdir(path.join(__dirname, "template"));

rimraf("./dist", () => {
  const devConfig = require("../../lib/webpack.dev");

  webpack(devConfig, (err, stats) => {
    if (err) {
      console.log(err);
      process.exit(2)
    }
    console.log(stats.toString({
        colors: true,
        modules: false,
        children: false
    }));

    console.log('Webpack build success, begin run test.');
    

    mocha.addFile(path.join(__dirname, 'html-test.js'))
    mocha.addFile(path.join(__dirname, 'js-css-test.js'))
    
    mocha.run()
  });
});
