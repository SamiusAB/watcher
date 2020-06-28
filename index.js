const chokidar = require('chokidar');
var parser = require('xml2json');
var fs = require('fs');

var json;

// Node.js socket client script
const WebSocket = require('ws');

// Connect to a server @ port 8080
// This is a Local WebSocket Server
const ws = new WebSocket('ws://127.0.0.1:8080');
 
ws.on('open', function open() {
  console.log('CLIENT: I connected to the server.');
  ws.send('CLIENT: Hello this is client!');
});

// Recieves JSON object in a String and parses to JSON  
ws.on('message', function incoming(data) {
  json = JSON.parse(data)
  console.log(json)
});


ws.on('end', () => {
  console.log('CLIENT: I disconnected from the server.');
})

// 
// 
// File Conversion and writing files
// 
// 
const main = function(watchPath = './items/*.json') {
  var watcher = chokidar.watch(watchPath, {
    persistent: true
  });

  watcher
    .on('add', handleAdded)
    // .on('change', function(path) {console.log('File', path, 'has been changed');})
    // .on('unlink', function(path) {console.log('File', path, 'has been removed');})
    // .on('error', function(error) {console.error('Error happened', error);})

}

const handleItemAdded = (path) => {

  var xmlValue = parser.toXml(json)
  
  var xmlFile = path.replace(".json", ".xml").replace(".\\items\\", ".\\orders\\")

  fs.writeFile(xmlFile, xmlValue, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('file written to ' + xmlFile);
  });

}

const handleAdded = (path) => {
  console.log('File', path, 'has been added');
  handleItemAdded(".\\" + path);
}


module.exports = main;