// Load in dependencies
var execSync = require('execSync');

// Export our utils
module.exports = {
  exec: function (cmd) {
    return execSync.stdout(cmd).trim();
  }
};