var getDisplays = require('../lib/getDisplays'),
    expect = require('chai').expect;

describe('getDisplays', function () {
  before(function saveDisplays (done) {
    var that = this;
    getDisplays(function handleDisplays (err, displays) {
      that.displays = displays;
      done(err);
    });
  });
  after(function cleanup () {
    delete this.displays;
  });

  it('returns proper monitor sizes', function () {
    // Sorry, tests are designed for 1920 x 1080 (x2) setup
    expect(this.displays).to.deep.equal([{
      top: 0,
      left: 0,
      width: 1920,
      height: 1080
    }, {
      top: 0,
      left: 1920,
      width: 1920,
      height: 1080
    }]);
  });
});
