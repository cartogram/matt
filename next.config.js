/* eslint-disable no-process-env, no-undef */

require('dotenv').config();

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
  env: {
    NAME: process.env.NAME,
    BETA_1: process.env.BETA_1,
  },
};
