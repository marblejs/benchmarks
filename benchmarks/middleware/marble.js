const http = require('http');
const { mapTo, filter } = require('rxjs/operators');
const { bindTo, createContext, createServer, httpListener, r, registerAll, ServerClientToken } = require('@marblejs/core');

const n = parseInt(process.env.MW || '1', 10);

const root$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    mapTo({ body: 'Hello World' })
  )),
);

const middlewares = [];
const effects = [root$];

for (let i = 0; i < n; i++) {
  middlewares.push(req$ => req$);
}

const server = createServer({
  port: 1337,
  listener: httpListener({ effects, middlewares }),
});

server.then(() => console.log(`  ${n} middlewares - Marble.js`));

const main = async () =>
  await (await server)();

main();