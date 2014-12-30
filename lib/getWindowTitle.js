var exec2 = require('child_process').exec;

module.exports = function getWindowTitle (id, cb) {
  // TODO: Use shell-quote
  return exec('wmctrl -l | grep ' + id + ' | cut --delimiter " " --fields 5-');
};
