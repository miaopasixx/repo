hexo.on("ready", () => {
  const { version } = require("../../package.json");
  hexo.log.info(`Mr.miaopasixx & 版本号 ${version}`);
});
