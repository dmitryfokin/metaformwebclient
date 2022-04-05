'use strict';

const path = require('path');
const rootPath = __dirname;

const load = async ({ application, config }) => {
  const staticPath = path.join(rootPath, 'static');
  // TODO: const applicationStaticPath = application.static.path;
  application.static.path = staticPath;
  await application.static.load(staticPath);
  // TODO: application.static.path = applicationStaticPath;
}

module.exports = {
  load,
}
