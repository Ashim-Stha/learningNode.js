const os = require("os");

console.log(os.userInfo());

const info = {
  name: os.type(),
  release: os.release(),
  totMem: os.totalmem(),
  freeMem: os.freemem(),
  uptime: `${os.uptime()} in sec`,
};

console.log(info);
