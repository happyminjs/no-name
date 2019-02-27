const path = require('path');
module.exports = {
    alias: {
        '@components': path.resolve(__dirname, '../src/components'),
        '@public': path.resolve(__dirname, '../src/public'),
        '@plugins': path.resolve(__dirname, '../src/plugins'),
        '@utils': path.resolve(__dirname, '../src/utils')
      }
};