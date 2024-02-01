module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    // expoの場合は下記を追記
    // https://callstack.github.io/react-native-paper/docs/guides/getting-started/
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
