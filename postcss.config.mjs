import pxtorem from 'postcss-pxtorem';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-import': {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*', '!letter-spacing'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 1,
      exclude: /node_modules/i,
      selectorBlackList: [
        /\.container/,
      ],
    },
    autoprefixer: {},
  },
};

export default config;
