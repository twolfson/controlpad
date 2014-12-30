// Load in dependencies
var exec = require('child_process').exec;

// TODO: This will become wmpush eventually
function resizeWindowTo(id, dimensions, cb) {
  // Remove any fullscreen junk
  // http://movingtofreedom.org/2010/08/10/arranging-windows-from-the-gnulinux-command-line-with-wmctrl/
  // TODO: Deal with muffin-specific properties
  // TODO: Use shell-quote
  console.log('sh -c \'' +
    'wmctrl -r ' + id + ' -b remove,maximized_vert ' +
    '&& ' +
    'wmctrl -r ' + id + ' -b remove,maximized_horz ' +
    '&& ' +
  // Resize the window
  // gravity, left, top, width, height
  // TODO; Use shell-quote
    'wmctrl -r ' + id + ' -e 0,' + [
      dimensions.left, dimensions.top,
      dimensions.width - 3, dimensions.height - 24 ].join(',') + '\'');
  exec('sh -c \'' +
    'wmctrl -r ' + id + ' -b remove,maximized_vert ' +
    '&& ' +
    'wmctrl -r ' + id + ' -b remove,maximized_horz ' +
    '&& ' +
  // Resize the window
  // gravity, left, top, width, height
  // TODO; Use shell-quote
    'wmctrl -r ' + id + ' -e 0,' + [
      dimensions.left, dimensions.top,
      dimensions.width - 3, dimensions.height - 24 ].join(',') + '\'', cb);
}
module.exports = resizeWindowTo;
