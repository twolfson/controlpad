// Load in dependencies
var utils = require('./utils'),
    getWindowTitle = utils.getWindowTitle,
    exec = utils.exec;

// TODO: This will become wmpush eventually
function resizeWindowTo(_id, dimensions) {
  var id = getWindowTitle(_id.replace('0x', '0x0'));

  // Remove any fullscreen junk
  // http://movingtofreedom.org/2010/08/10/arranging-windows-from-the-gnulinux-command-line-with-wmctrl/
  // TODO: Deal with muffin-specific properties
  exec('wmctrl -r ' + id + ' -b remove,maximized_vert');
  exec('wmctrl -r ' + id + ' -b remove,maximized_horz');

  // Resize the window
  // gravity, left, top, width, height
  exec('wmctrl -r ' + id + ' -e 0,' + [
    dimensions.left, dimensions.top,
    dimensions.width - 3, dimensions.height - 24 ].join(','));
}
module.exports = resizeWindowTo;