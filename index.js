// local modules
const { a, add } = require('./local-1')
const { a: a2, add: add2 } = require('./local-2')

console.log(add2(3, 4, 6))


// built-in-modules
const path = require("path")

console.log(path.join("/F:/level2/learning-node/", "local-1.js"));

