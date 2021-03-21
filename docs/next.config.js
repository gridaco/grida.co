const withTM = require("next-transpile-modules");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX(
  // withTM(
  {
    basePath: "/docs",
    transpileModules: ["shared-layouts", "styles"],
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "/docs/:path*",
        },
      ];
    },
  },
  // ),
);
