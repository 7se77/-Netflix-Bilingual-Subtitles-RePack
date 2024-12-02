const fs = require('fs');

try {
  const data = fs.readFileSync('frequency-alpha-alldicts.txt', 'utf8');
  const obj = {};
  const allLines = data.toString().split(/\n|\r/);

  for (let i = 0; i < 5000; i += 1) {
    obj[allLines[i].split(/\s+/)[1]] = 1;
  }

  fs.writeFile('5k-1.json', JSON.stringify(obj), (err) => {
    if (err) throw err;
    console.log('complete');
  });
} catch (e) {
  console.log('Error:', e.stack);
}
