const request = require('request');
const fs = require('fs');
const metadata = JSON.parse(fs.readFileSync('./json/_metadata.json'));

for(var i=0; i < 10000; i++){
fs.writeFileSync(`./jsontest/${i}.json`, JSON.stringify(metadata[i]));
console.log(`./jsontest/${i}.json`);
}