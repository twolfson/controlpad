// Load in dependencies
var getWindowDisplay = require('../lib/getWindowDisplay'),
    expect = require('chai').expect;

describe('getWindowDisplay', function () {
  before(function () {
    this.display = getWindowDisplay({
      left: 2800,
      top: 50,
      width: 1000,
      height: 900
    }, [{
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

  it('returns proper display', function () {
    expect(this.display).to.deep.equal({
      top: 0,
      left: 1920,
      width: 1920,
      height: 1080
    });
  });

  // TODO: Should do some tests against chrome
});