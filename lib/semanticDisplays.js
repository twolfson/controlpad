function getSemanticDisplays(displays) {
  // Calculate the rightmost/leftmost/topmost/bottommost displays
  var semanticDisplays = {
        leftmost: displays.reduce(function (a, b) {
          if (a.left <= b.left) { return a; }
          return b;
        }),
        rightmost: displays.reduce(function (a, b) {
          if (a.left >= b.left) { return a;}
          return b;
        }),
        topmost: displays.reduce(function (a, b) {
          if (a.top <= b.top) { return a; }
          return b;
        }),
        bottommost: displays.reduce(function (a, b) {
          if (a.top >= b.top) { return a; }
          return b;
        })
      };
  return semanticDisplays;
}
module.exports = getSemanticDisplays;