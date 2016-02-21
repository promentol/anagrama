const exec = window.require('child_process').exec,
      path = window.require('path');

import platform from './platform'

const escape = (s) => {
  return s.replace(/"/g, '\\\"');
}

export default (target, callback) => {
  var opener;
  if(platform.isMac) {
    opener = 'open';
  } else if(platform.isWindows) {
    opener = 'start ""';
  } else {
    opener = path.join(__dirname, 'assets/xdg-open');
  }
  return exec(opener + ' "' + escape(target) + '"', callback);
}