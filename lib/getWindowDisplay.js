// Load in dependencies
var getDisplays = require('./getDisplays');

// Helper function to get window's display
// ANTI-PATTERN: No room for expansion with parameters and requires memorization of ordering
function getWindowDisplay(win, displays) {
  // Determine where the top-left corner of window is
  var currentDisplay = displays[0],
      i = 0,
      len = displays.length;
  for (; i < len; i++) {
    var _display = displays[i],
        isWithinHoriz = (_display.left <= win.left && (_display.left + _display.width) >= win.left),
        isWithinVert = (_display.top <= win.top && (_display.top + _display.height) >= win.top);

    // If the window is within the display horiz and vert, save it and stop searching
    if (isWithinHoriz && isWithinVert) {
      currentDisplay = _display;
      break;
    }
  }
}

// Export getWindowDisplay
module.exports = getWindowDisplay;