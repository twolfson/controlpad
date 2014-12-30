// Load in dependencies
var resizeWindowTo = require('../lib/resizeWindowTo'),
    windowInfo = require('../lib/windowInfo'),
    exec = require('child_process').exec,
    expect = require('chai').expect;

// Set up test global
var WINDOW_ID = '0x01600093';
describe.skip('resizeWindowTo', function () {
  before(function setupName (done) {
    // TODO: Use shell-quote
    exec('wmctrl -l | grep ' + WINDOW_ID + ' | cut --delimiter " " --fields 5-', function handleName (err, name) {
      that.commonName = name;
      done(err);
    });
  });


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
      expect(info).to.deep.equal({
        top: 20,
        left: 2900,
        height: 800,
        width: 400
      });
    });
  });
});
