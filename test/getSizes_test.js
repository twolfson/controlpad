// Load in dependencies
var getSizes = require('../lib/getSizes'),
    expect = require('chai').expect;

describe('getSizes', function () {
  before(function () {
    this.sizes = getSizes({
      top: 0,
      left: 0,
      width: 1920,
      height: 1080
    });
  });

  it('has the proper left-half display', function () {
    expect(this.sizes['left-half']).to.deep.equal({
      top: 0,
      left: 0,
      width: 960,
      height: 1080
    });
  });

  it('has the proper top-left-quarter display', function () {
    expect(this.sizes['top-left-quarter']).to.deep.equal({
      top: 0,
      left: 0,
      width: 960,
      height: 540
    });
  });

  it('has the proper bottom-right-eighth display', function () {
    expect(this.sizes['bottom-right-eighth']).to.deep.equal({
      top: 540,
      left: 1440,
      width: 480,
      height: 540
    });
  });
});