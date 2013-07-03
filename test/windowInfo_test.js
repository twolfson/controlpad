// Load in dependencies
var windowInfo = require('../lib/windowInfo'),
    exec = require('../lib/utils').exec,
    expect = require('chai').expect;

// Set up test global
var WINDOW_ID = '0x01600093',
    COMMON_NAME = exec('wmctrl -l | grep ' + WINDOW_ID + ' | cut --delimiter " " --fields 5');
describe('windowInfo', function () {
  // Before anything, resize the window
  before(function () {
    // Sorry, tests are designed for 1920 x 1080 (x2) setup
    // Left, top, width, height
    exec('wmctrl -r ' + COMMON_NAME + ' -e 0,2800,30,1000,900');
  });

  // Grab the window dimentsions
  before(function () {
    this.win = windowInfo(WINDOW_ID);
  });

  it('returns proper window size', function () {
    expect(this.win).to.deep.equal({
      // TODO: Left from wmctrl is +3 consistently
      left: 2803,
      // TODO: Top from wmctrl is +24 consistently
      top: 54,
      width: 1000,
      height: 900
    });
  });
});