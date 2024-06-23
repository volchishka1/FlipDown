module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }],
    [
      'module-resolver',
      {
        extensions: ['.android.js', '.ios.js', '.js', '.json', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
