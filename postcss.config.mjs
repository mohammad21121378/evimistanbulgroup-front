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
      selectorBlackList: [
        /\.container/,
        /^\.ring/,
        /^\.ring-2/,
        /^\.ring-5/,
        /^\.ring-offset/,
        /^\.ring-inset/,
      ],
    },
    autoprefixer: {},
  },
};

export default config;
