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
    // eslint-disable-next-line no-process-env, no-undef
    NAME: process.env.NAME,
  },
};
