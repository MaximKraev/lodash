import baseClone from './.internal/baseClone.js'
import baseConforms from './.internal/baseConforms.js'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1

function conforms(source) {
  return baseConforms(baseClone(source, CLONE_DEEP_FLAG))
}

export default conforms
