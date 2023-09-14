console.log("in os module");
const osModule = require("os");

const { uptime, cpus } = osModule;

console.log("platform-->", osModule.platform());

console.log("Type-->", osModule.type());

console.log("Architecture-->", osModule.arch());

console.log("Memory-->", osModule.totalmem() / 1024 / 1024 / 1024);

console.log("Free Memory-->", osModule.freemem());

console.log("user Info-->", osModule.userInfo());

console.log("uptime-->", uptime() / 3600 / 24);

console.log("CPUs-->", cpus());


