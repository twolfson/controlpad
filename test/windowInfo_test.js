// Load in dependencies
var windowInfo = require('../lib/windowInfo'),
    execSync = require('../lib/utils').exec,
    exec = require('child_process').exec,
    expect = require('chai').expect;

// Set up test global
var WINDOW_ID = '0x01600093',
    COMMON_NAME = execSync('wmctrl -l | grep ' + WINDOW_ID + ' | cut --delimiter " " --fields 5-');
describe('windowInfo', function () {
  describe('getting info about a window at 0,0', function () {
    // Before anything, resize the window
    before(function (done) {
      // Sorry, tests are designed for 1920 x 1080 (x2) setup
      // left, top, width, height
      exec('wmctrl -r "' + COMMON_NAME + '" -e 0,0,0,1000,900', done);
    });

    // Grab the window dimentsions
    before(function () {
      this.win = windowInfo(WINDOW_ID);
    });

    it('returns proper window size', function () {
      expect(this.win).to.deep.equal({
        // DEV: wmctrl resizes left +3 and top +24 so we calculate proper height and such including border
        left: 0,
        top: 0,
        width: 1003,
        height: 924
      });
    });
  });

  describe('getting info about a window at an arbitrary location', function () {
    // Before anything, resize the window
    before(function (done) {
      // Sorry, tests are designed for 1920 x 1080 (x2) setup
      // left, top, width, height
      exec('wmctrl -r "' + COMMON_NAME + '" -e 0,2800,30,1000,900', done);
    });

    // Grab the window dimentsions
    before(function () {
      this.win = windowInfo(WINDOW_ID);
    });

    it('returns proper window size', function () {
      expect(this.win).to.deep.equal({
        // DEV: wmctrl resizes left +3 and top +24 so we calculate proper height and such including border
        left: 2800,
        top: 30,
        width: 1003,
        height: 924
      });
    });
  });

  describe.only('getting info about a maximized window', function () {
    before(function (done) {
      exec('wmctrl -r "' + COMMON_NAME + '" -e 0,2000,0,500,400', done);
    });
    before(function (done) {
      exec('wmctrl -r "' + COMMON_NAME + '" -b add,maximized_vert', done);
    });
    before(function (done) {
      exec('wmctrl -r "' + COMMON_NAME + '" -b add,maximized_horz', done);
    });
    // after(function (done) {
    //   exec('wmctrl -r "' + COMMON_NAME + '" -b remove,maximized_vert', done);
    // });
    // after(function (done) {
    //   exec('wmctrl -r "' + COMMON_NAME + '" -b remove,maximized_horz', done);
    // });

    // Grab the window dimentsions
    before(function () {
      this.win = windowInfo(WINDOW_ID);
    });

    it('returns proper window size', function () {
      console.log(this.win);
      expect(this.win).to.deep.equal({
        // DEV: wmctrl resizes left +3 and top +24 so we calculate proper height and such including border
        left: 2800,
        top: 30,
        width: 1003,
        height: 924
      });
    });

  });
});