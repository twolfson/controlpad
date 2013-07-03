// Load in dependencies
var execSync = require('execSync');

// Export our utils
function exec(cmd) {
  return execSync.stdout(cmd).trim();
}
module.exports = {
  exec: exec,
  getWindowTitle: function (id) {
    return exec('wmctrl -l | grep ' + id + ' | cut --delimiter " " --fields 5-');
  }
};