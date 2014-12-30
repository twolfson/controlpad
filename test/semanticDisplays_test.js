// Load in dependencies
var semanticDisplays = require('../lib/semanticDisplays'),
    expect = require('chai').expect;

describe('semanticDisplays', function () {
  before(function () {
    this.semanticDisplays = semanticDisplays([{
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
  after(function () {
    delete this.semanticDisplays;
  });

  it('has the proper leftmost display', function () {
    expect(this.semanticDisplays.leftmost).to.deep.equal({
      top: 0,
      left: 0,
      width: 1920,
      height: 1080
    });
  });

  it('has the proper rightmost display', function () {
    expect(this.semanticDisplays.rightmost).to.deep.equal({
      top: 0,
      left: 1920,
      width: 1920,
      height: 1080
    });
  });
});
