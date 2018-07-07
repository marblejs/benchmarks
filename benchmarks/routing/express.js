const express = require('express');
const app = express();

let n = parseInt(process.env.MW || '1', 10);

console.log(`  ${n} endpoints - Express.js`);

while (n--) {
  app.get(`/${n}`, (req, res) => {
    res.send('hello world');
  });
}

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(1337);
