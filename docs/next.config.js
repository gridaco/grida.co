const withTM = require("next-transpile-modules");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  transpileModules: ["shared-layouts", "styles"],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async rewrites() {},
});
