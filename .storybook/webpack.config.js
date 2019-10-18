module.exports = ({ config }) => {
  config.module.rules.unshift({
    test: /\.(ts|tsx)$/,
    loaders: [
      require.resolve("awesome-typescript-loader"),
      require.resolve("react-docgen-typescript-loader")
      // require.resolve("@storybook/source-loader")
    ],
    enforce: "pre"
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
