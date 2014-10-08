var getDisplays = require('../lib/getDisplays'),
    expect = require('chai').expect;

describe.only('getDisplays', function () {
  before(function () {
    this.displays = getDisplays();
  });

  it('returns accurate monitor size', function () {
    expect(this.displays).to.deep.equal([{
      top: 0,
      left: 0,
      width: 1920,
      height: 1080
    }]);
  });

  describe.skip('on 2 monitors', function () {
    // TODO: Add mock

    it('returns accurate monitor sizes', function () {
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
});
