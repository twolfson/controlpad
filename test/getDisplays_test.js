var getDisplays = require('../lib/getDisplays'),
    expect = require('chai').expect;

describe('getDisplays', function () {
  before(function () {
    this.displays = getDisplays();
  });

  it('returns proper monitor sizes', function () {
    // Sorry, tests are designed for 1920 x 1080 (x2) setup
    console.log(this.displays);
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