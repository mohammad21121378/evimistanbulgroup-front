import pxtorem from 'postcss-pxtorem';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-import': {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i,
      selectorBlackList: [/\.container/],
    },
    autoprefixer: {},
  },
};

export default config;
