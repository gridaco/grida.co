const withTM = require("next-transpile-modules");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  webpack: function(config, { isServer }) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpileModules: [
    "lodash-es",
    "@web/layouts",
    "@web/styles",
    "@web/utils",
    "@web/common",
    "@web/components",
  ],
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/getting-started",
      },
    ];
  },
});
