const http = require('http');
const { mapTo, filter } = require('rxjs/operators');
const { httpListener, matchPath, matchType } = require('@marblejs/core');

const n = parseInt(process.env.MW || '1', 10);

const root$ = req$ =>
  req$.pipe(
    mapTo({ body: 'Hello World' })
  );

const middlewares = [];
const effects = [root$];

for (let i = 0; i < n; i++) {
  middlewares.push(req$ => req$);
}

const app = httpListener({ middlewares, effects });

console.log(`  ${n} middlewares - Marble.js`);
http.createServer(app).listen(1337);
