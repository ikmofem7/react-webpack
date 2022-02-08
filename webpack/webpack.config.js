// import commonConfig from "./webpack.common"
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
module.exports = (envVar) => {
  const { mode } = envVar;
  const envConfig = require(`./webpack.${mode}.js`);
  const config = merge(envConfig, commonConfig);
  return config;
};
