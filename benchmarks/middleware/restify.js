const restify = require('restify');
const app = restify.createServer();

let n = parseInt(process.env.MW || '1', 10);

console.log(`  ${n} middleware - Restify`);

while (n--) {
  app.use((req, res, next) => {
    next();
  });
}

app.use((req, res, next) => {
  res.send('Hello World')
});

app.listen(1337);
