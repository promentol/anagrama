var os = window.require('os');

var platform = {
  isLinux: false,
  isMac: false,
  isWindows: false,
  isWindows8: false,
  version: os.release()
};

var isOfMinimumVersion = function(minimumVersion){
  var actualVersionPieces = platform.version.split('.'),
     pieces = minimumVersion.split('.'),
     numberOfPieces = pieces.length;

  for(var i = 0; i < numberOfPieces; i++){
     var piece = parseInt(pieces[i], 10),
       actualPiece = parseInt(actualVersionPieces[i], 10);

     if (typeof actualPiece === 'undefined') {
       break; // e.g. 13.1 passed and actual is 13.1.0
     }
     else if (actualPiece > piece) {
       break; // doesn't matter what the next bits are, the major version (or whatever) is larger
     }
     else if (actualPiece === piece) {
       continue; // to check next version piece
     }
     else {
       return false;
     }
  }
  return true; // all was ok
};


var name = os.platform();

if(name === 'darwin'){
  platform.name = 'mac';
  platform.isMac = true;
}
else if(name === 'linux'){
  platform.name = 'linux';
  platform.isLinux = true;
}
else {
  platform.name = 'windows';
  platform.isWindows = true;
  platform.isWindows8 = isOfMinimumVersion('6.2.9200');
}

platform.is64Bit = os.arch() === 'x64' || process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432');

module.exports = platform;
