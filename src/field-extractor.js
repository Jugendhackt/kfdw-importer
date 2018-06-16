const fs = require('fs');
const pretty = require('./prettify')

pretty.prettify('data/input.json', 'data/out/pretty.json')

const fileName = 'data/out/pretty.json'
const file = fs.readFileSync(fileName, null, 2)
let json = JSON.parse(file)

for (let i = 0; i < json.length; i++) {
  json[i].data = JSON.parse(json[i].data);
}

fs.writeFileSync('data/out/computed.json', JSON.stringify(json, null, 2));


console.log("Statistics:")
console.log(`Nodes: ${json.length}`)
