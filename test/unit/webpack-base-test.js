const assert = require("assert");

describe("test webpack.base.js", () => {
  const baseConfig = require("../../lib/webpack.base");

  it("entry", () => {
    assert.equal(baseConfig.entry.app, '/Users/shuqian/Desktop/build-webpack/test/smoke/template/src/index.js')
  });
});
