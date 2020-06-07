const path = require('path');
const withPlugins = require('next-compose-plugins');
const antdLessLoader = require("next-antd-aza-less");

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

const plugins = [
  antdLessLoader({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    }
  }),
];

module.exports = withPlugins(plugins);
