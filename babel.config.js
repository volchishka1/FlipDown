module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.android.js', '.ios.js', '.js', '.json', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
