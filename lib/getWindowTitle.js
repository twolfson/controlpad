var exec = require('child_process').exec;

module.exports = function getWindowTitle (id, cb) {
  // TODO: Use shell-quote
  exec('wmctrl -l | grep ' + id + ' | cut --delimiter " " --fields 5-', cb);
};
