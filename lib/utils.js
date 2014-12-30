// Load in dependencies
var exec = require('shelljs').exec;

// Export our utils
exports.exec = function (cmd) {
  return exec(cmd).output.trim();
};
exports.getWindowTitle = function (id) {
  return exports.exec('wmctrl -l | grep ' + id + ' | cut --delimiter " " --fields 5-');
};
