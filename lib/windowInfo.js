// Load in dependencies
var exec = require('child_process').exec;

// Define grep-like fn
function grep(lineArr, str) {
  return lineArr.filter(function findMatchingString (line) {
    return line.indexOf(str) !== -1;
  })[0];
}

// Helper function to collect information about a window
function windowInfo(id, cb) {
  // Get active window and window info
  // http://unix.stackexchange.com/questions/61037/how-to-resize-application-windows-in-an-arbitrary-direction-not-vertical-and-no
  console.log('hey', id);
  exec('xwininfo -id ' + id, function handleInfo (err, _info) {
    // If there was an error, callback with it
    if (err) {
      return cb(err);
    }

    var _infoLines = _info.split(/\n/g);
    console.log('wat', id);
    console.log('xxxxx', grep(_infoLines, 'Width'));
    var info = {
      width: +grep(_infoLines, 'Width').split(/ /g)[4],
      height: +grep(_infoLines, 'Height').split(/ /g)[4],
      left: +grep(_infoLines, 'Absolute upper-left X').split(/ /g)[7],
      top: +grep(_infoLines, 'Absolute upper-left Y').split(/ /g)[7]
    };

    // var state = exec('xprop -id ' + id + ' | grep _NET_WM_STATE'),
    //     isHorzMaximized = state.match('_NET_WM_STATE_MAXIMIZED_HORZ');

    // // wmctrl resizes left +3 and top +24 to account for borders
    // // Adjust info back
    // info.top -= 24;
    // info.height += 24;

    // // If we are not horizontally maxed out, adjust for horizontal border
    // // DEV: The vertical border is always present
    // if (!isHorzMaximized) {
    //   info.left -= 3;
    //   info.width += 3;
    // }

    // TODO: Should do some tests against chrome since borderless might not apply

    // Return the info
    cb(null, info);
  });
}

// Expose windowInfo
module.exports = windowInfo;
