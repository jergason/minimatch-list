var assert = require('assert')
var minimatchList = require('../index')

describe('minimatchList', function() {
  it('matches a string against a list of patterns', function() {
    var patterns = [
      '*hurp',
      '**durp**',
      'foobar'
    ]
    assert(minimatchList('foobar', patterns))
    assert(!minimatchList('beans', patterns))
  })
})
