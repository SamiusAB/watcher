const chokidar = require('chokidar');

const fileTypes = ['xsd', 'xsd', 'dat'];
const defaultPath = './watching';

const main = function(watchPath = defaultPath) {
  var watcher = chokidar.watch(watchPath, {
    // ignored: /.../,
    persistent: true
  });

  watcher
    .on('add', function(path) {console.log('File', path, 'has been added');})
    .on('change', function(path) {console.log('File', path, 'has been changed');})
    .on('unlink', function(path) {console.log('File', path, 'has been removed');})
    .on('error', function(error) {console.error('Error happened', error);})
}


module.exports = main;