const fs = require('fs');
const pretty = require('./prettify')

pretty.prettify('data/input.json', 'data/out/pretty.json')

const fileName = 'data/out/pretty.json'
const file = fs.readFileSync(fileName, null, 2)
const json = JSON.parse(file)

let numberOfParentNodes = 0
for(var item in json) {
  numberOfParentNodes++;
}
console.log(`Nodes: ${numberOfParentNodes}`)
