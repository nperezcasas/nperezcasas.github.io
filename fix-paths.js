const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'out');

function replaceInFile(filePath) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/"\/_next\//g, '"/beyond-nuria-v2/_next/');
    result = result.replace(/"\/images\//g, '"/beyond-nuria-v2/images/');
    
    fs.writeFile(filePath, result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 
  files.forEach(function (file) {
    if (path.extname(file) === '.html') {
      replaceInFile(path.join(directoryPath, file));
    }
  });
});

