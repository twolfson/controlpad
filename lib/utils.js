// Load in dependencies
var nodeExecSync = require('child_process').execSync;
var extExecSync;
try {
  extExecSync = require('execSync');
} catch (err) {
  // Ignore loading errors
}

// Define a default exec sync
// https://nodejs.org/docs/v5.0.0/api/child_process.html#child_process_child_process_execsync_command_options
var exec = function (cmd) {
  return nodeExecSync(cmd);
};

// If there is no native exec sync, then use our external one
if (!nodeExecSync) {
  exec = function (cmd) {
    // https://www.npmjs.com/package/execSync
    return execSync.stdout(cmd).trim();
  };
}

// Export our utils
module.exports = {
  exec: exec,
  getWindowTitle: function (id) {
    return exec('wmctrl -l | grep ' + id + ' | cut --delimiter " " --fields 5-');
  }
};
