function getSizes(display) {
  // Create sizes based off of the display
  var halfWidth = display.width / 2,
      halfHeight = display.height / 2,
      eighthWidth = halfWidth / 2,
      eighthHeight = halfHeight / 2,
      semanticSizes = {
        'left-half': {
          width: halfWidth,
          height: display.height,
          top: display.top,
          left: display.left
        },
        'right-half': {
          width: halfWidth,
          height: display.height,
          top: display.top,
          left: display.left + halfWidth
        },
        'top-half': {
          width: display.width,
          height: halfHeight,
          top: display.top,
          left: display.left
        },
        'bottom-half': {
          width: display.width,
          height: halfHeight,
          top: display.top + halfHeight,
          left: display.left
        },
        'top-left-quarter': {
          width: halfWidth,
          height: halfHeight,
          top: display.top,
          left: display.left
        },
        'top-right-quarter': {
          width: halfWidth,
          height: halfHeight,
          top: display.top,
          left: display.left + halfWidth
        },
        'bottom-left-quarter': {
          width: halfWidth,
          height: halfHeight,
          top: display.top + halfHeight,
          left: display.left
        },
        'bottom-right-quarter': {
          width: halfWidth,
          height: halfHeight,
          top: display.top + halfHeight,
          left: display.left + halfWidth
        },
        'top-left-eighth': {
          width: eighthWidth,
          height: halfHeight,
          top: display.top,
          left: display.left
        },
        'top-right-eighth': {
          width: eighthWidth,
          height: halfHeight,
          top: display.top,
          left: display.left + halfWidth + eighthWidth
        },
        'bottom-left-eighth': {
          width: eighthWidth,
          height: halfHeight,
          top: display.top + halfHeight,
          left: display.left
        },
        'bottom-right-eighth': {
          width: eighthWidth,
          height: halfHeight,
          top: display.top + halfHeight,
          left: display.left + halfWidth + eighthWidth
        },
        full: {
          width: display.width,
          height: display.height,
          top: display.top,
          left: display.left
        },
        center: {
          width: halfWidth,
          height: halfHeight,
          top: display.top + eighthHeight,
          left: display.left + eighthWidth
        }
      };
  return semanticSizes;
}
module.exports = getSizes;