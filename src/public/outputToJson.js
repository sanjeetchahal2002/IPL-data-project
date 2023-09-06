const fs = require('fs').promises
function outputToJson(data,dest){
    const result = JSON.stringify(data,null,2)
    fs.writeFileSync(dest,result)
}
module.exports = outputToJson