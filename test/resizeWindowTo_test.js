// Load in dependencies
var resizeWindowTo = require('../lib/resizeWindowTo'),
    windowInfo = require('../lib/windowInfo'),
    exec = require('../lib/utils').exec,
    expect = require('chai').expect;

// Set up test global
var WINDOW_ID = '0x01600093',
    COMMON_NAME = exec('wmctrl -l | grep ' + WINDOW_ID + ' | cut --delimiter " " --fields 5-');
describe.skip('resizeWindowTo', function () {
  describe('resizing a window', function () {
    before(function () {
      resizeWindowTo(COMMON_NAME, {
        top: 20,
        left: 2900,
        height: 800,
        width: 400
      });
    });

    it('is successful in its resize', function () {
      var info = windowInfo(WINDOW_ID);
      console.log(info);
      expect(info).to.deep.equal({
        top: 20,
        left: 2900,
        width: 800,
        height: 400
      });
    });
  });
});