const Koa = require('koa');
const app = new Koa();

let n = parseInt(process.env.MW || '1', 10);

console.log(`  ${n} async middleware - Koa`);

while (n--) {
  app.use(async (ctx, next) => await next());
}

app.use(async (ctx, next) => {
  await next();
  ctx.body = 'Hello World';
});

app.listen(1337);
