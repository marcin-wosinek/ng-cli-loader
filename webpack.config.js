module.exports = (config, options) => {
  config.module.rules.push({
    test: /\.html?$/,
    loader: "html-loader",
  });
  return config;
};
