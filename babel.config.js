const path = require('path');

const root = path.resolve(__dirname);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }],
    [
      'module-resolver',
      {
        alias: {
          '@assets': `${root}/assets`,
          '@components': `${root}/src/components`,
          '@config': `${root}/src/config`,
          '@constants': `${root}/src/constants`,
          '@navigation': `${root}/src/navigation`,
          '@root': `${root}/src`,
          '@screens': `${root}/src/screens`,
          '@state': `${root}/src/state`,
        },
        extensions: ['.android.js', '.ios.js', '.js', '.json', '.ts', '.tsx'],
        root: [root],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
