// Load in dependencies
var exec = require('./utils').exec;

// Helper function to collect information about a window
function windowInfo(id) {
  // Get active window and window info
  // http://unix.stackexchange.com/questions/61037/how-to-resize-application-windows-in-an-arbitrary-direction-not-vertical-and-no
  var info = {
    width: +exec("xwininfo -id " + id + " | grep Width | cut --delimiter ' ' --fields 4"),
    height: +exec("xwininfo -id " + id + " | grep Height | cut --delimiter ' ' --fields 4"),
    left: +exec("xwininfo -id " + id + " | grep 'Absolute upper-left X' | cut --delimiter ' ' --fields 7"),
    top: +exec("xwininfo -id " + id + " | grep 'Absolute upper-left Y' | cut --delimiter ' ' --fields 7")
  };

  var state = exec('xprop -id ' + id + ' | grep _NET_WM_STATE'),
      isHorzMaximized = state.match('_NET_WM_STATE_MAXIMIZED_HORZ');

  // wmctrl resizes left +3 and top +24 to account for borders
  // Adjust info back
  info.top -= 24;
  info.height += 24;

  // If we are not horizontally maxed out, adjust for horizontal border
  // DEV: The vertical border is always present
  if (!isHorzMaximized) {
    info.left -= 3;
    info.width += 3;
  }

  // TODO: Should do some tests against chrome since borderless might not apply

  // Return the info
  return info;
}

// Expose windowInfo
module.exports = windowInfo;