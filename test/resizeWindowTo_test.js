// Load in dependencies
var resizeWindowTo = require('../lib/resizeWindowTo'),
    windowInfo = require('../lib/windowInfo'),
    exec = require('child_process').exec,
    expect = require('chai').expect;

// Set up test global
// DEV: Find an id via `wmctrl -l` on any window
var WINDOW_ID = '0x0360008a';
describe('resizeWindowTo', function () {
  before(function setupName (done) {
    // TODO: Use shell-quote
    var that = this;
    exec('wmctrl -l | grep ' + WINDOW_ID + ' | cut --delimiter " " --fields 5-', function handleName (err, name) {
      that.commonName = name.trim();
      done(err);
    });
  });
  after(function cleanup () {
    delete this.commonName;
  });

  describe('resizing a window', function () {
    before(function (done) {
      resizeWindowTo(this.commonName, {
        top: 20,
        left: 2900,
        height: 800,
        width: 400
      }, done);
    });

    it('is successful in its resize', function (done) {
      info = windowInfo(WINDOW_ID, function handleWindowInfo (err, info) {
        if (err) {
          return done(err);
        }

        expect(info).to.deep.equal({
          top: 20,
          left: 2900,
          height: 800,
          width: 400
        });
      });
    });
  });
});
