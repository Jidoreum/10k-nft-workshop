const request = require('request');
const fs = require('fs');
const baseImageUri = "ipfs://QmdmTFtCuf1Er2vyeyhzARSpoA9bLtdD1Nww7UvEUab3sZ/"; //(수정) QmQLzk~ => 해당 이미지 폴더 CID로 수정
const metadata = JSON.parse(fs.readFileSync('./json/_metadata.json'));

for(var i=0; i < 10000; i++){
  metadata[i].image = `${baseImageUri}${i+1}.png`;
  console.log(metadata[i].image);
}
fs.writeFileSync('./json/_metadata.json', JSON.stringify(metadata));

