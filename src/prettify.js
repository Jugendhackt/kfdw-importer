const fs = require('fs');

function prettify(input, output) {
  const fileName = input

  const file = fs.readFileSync(fileName, 'utf-8')
  const json = JSON.parse(file)

  const pretty = JSON.stringify(json, null, 2)
  fs.writeFileSync(output, pretty)
}

module.exports = {
  prettify
}
