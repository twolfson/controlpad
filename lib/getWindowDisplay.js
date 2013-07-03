// Helper function to get window's display
// ANTI-PATTERN: No room for expansion with parameters and requires memorization of ordering
function getWindowDisplay(win, displays) {
  // Determine where the top-left corner of window is
  var currentDisplay = displays[0],
      i = 0,
      len = displays.length;
  for (; i < len; i++) {
    var display = displays[i],
        isWithinLeftBoundary = win.left >= display.left,
        isWithinRightBoundary = win.left < (display.left + display.width),
        isWithinTopBoundary = win.top >= display.top,
        isWithinBottomBoundary = win.top < (display.top + display.height);

    console.log(win, display);

    // If the window is within the display horiz and vert, save it and stop searching
    if (isWithinLeftBoundary && isWithinRightBoundary && isWithinTopBoundary && isWithinBottomBoundary) {
      currentDisplay = display;
      break;
    }
  }

  // Return the display
  return currentDisplay;
}

// Export getWindowDisplay
module.exports = getWindowDisplay;