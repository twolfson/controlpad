// Load in dependencies
var exec = require('child_process').exec;

// Helper to determine displays
function getDisplays(cb) {
  // Grab display sizings/offsets
  // DISPLAYS_STR=$(xrandr | grep ' connected ' | cut --fields=3 --delimiter ' ')
  /*
  $ xrandr | grep ' connected '
  VGA-0 connected 1920x1080+1920+0 (normal left inverted right x axis y axis) 597mm x 336mm
  LVDS-0 connected primary 1920x1080+0+0 (normal left inverted right x axis y axis) 344mm x 193mm
  $ xrandr | grep ' connected ' | sed -E 's/^[^ ]+ [^0-9]+([0-9]+x[^ ]+).*$/\1/'
  1920x1080+1920+0
  1920x1080+0+0
  */
  exec("xrandr", function handleResult (err, displaysInfoStr) {
    // If there was an error, callback with it
    if (err) {
      return cb(err);
    }

    var displaysInfoArr = displaysInfoStr.split(/\n/g);
    var displaysArr = displaysInfoArr.filter(function findConnected (displayInfo) {
      return displayInfo.indexOf(' connected ') !== -1;
    });
    console.log(displays);
    var displays = displaysArr.map(function interpretdisplay (displayStr) {
      // DEV: This is a bash-like implementation -- normally, we would use .match(/.../g), or `extract-values` module
      var displayDimensions = displayStr.replace(/x/g, ' ').replace(/\+/g, ' ').split(' ');
      return {
        width: +displayDimensions[0],
        height: +displayDimensions[1],
        left: +displayDimensions[2],
        top: +displayDimensions[3]
      };
    });

    // Sort the displays in bookshelf order
    displays.sort(function (a, b) {
      if (a.top !== b.top) {
        return a.top - b.top;
      } else {
        return a.left - b.left;
      }
    });

    // Callback with the displays
    cb(null, displays);
  });
}

// Export our helper
module.exports = getDisplays;
