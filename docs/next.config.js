const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  basePath: "/docs",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
});
