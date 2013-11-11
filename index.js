var minimatch = require('minimatch')

/**
 * Match a single string against a list of patterns
 *
 * @param path String - a string to match
 * @param patternList Array - list of patterns to match against
 * @param options Object - hash of options that will be passed to minimatch()
 */
function matchPatternList(path, patternList, options) {
  return patternList.some(function(pattern) {
    return minimatch(path, pattern, options)
  })
}

module.exports = matchPatternList
