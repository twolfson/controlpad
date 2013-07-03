function getDisplays() {
  // Grab display sizings/offsets
  // DISPLAYS_STR=$(xrandr | grep ' connected ' | cut --fields=3 --delimiter ' ')
  /*
  $ xrandr | grep ' connected ' | cut --fields=3 --delimiter ' '
  1920x1080+1920+0
  1920x1080+0+0
  */
  var displaysStr = exec("xrandr | grep ' connected ' | cut --fields=3 --delimiter ' '"),
      displaysArr = displaysStr.split(/\n/g),
      displays = displaysArr.map(function interpretdisplay (displayStr) {
        // DEV: This is a bash-like implementation -- normally, we would use .match(/.../g), or `extract-values` module
        var displayDimensions = displayStr.replace(/x/g, ' ').replace(/\+/g, ' ').split(' ');
        return {
          width: +displayDimensions[0],
          height: +displayDimensions[1],
          left: +displayDimensions[2],
          top: +displayDimensions[3]
        };
      });
  return displays;
}