const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const withPlugins = require('next-compose-plugins');
const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const antdLessLoader = require("next-antd-aza-less");
const lessToJS = require('less-vars-to-js');

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './src/assets/styles/styles.less'), 'utf8'),
// );

const plugins = [
  withCss,
  antdLessLoader({
    lessLoaderOptions: {
      javascriptEnabled: true,
      // modifyVars: themeVariables,
    }
  }),
];

const configObj = {
  webpack: (config, { isServer }) => {

    module.rules.push(
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
    );

    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.push(
        {
          test: antStyles,
          use: "null-loader"
        }
      );
    }
    
    config.resolve.extensions = [".js", ".jsx", ".json", ".mjs"];

    return config;
  },
};

module.exports = withPlugins(plugins, configObj);
