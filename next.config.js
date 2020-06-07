const path = require('path');
const withLess = require('@zeit/next-less');

module.exports = withLess({
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
});
