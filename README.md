<p align="center">
  <a href="http://marblejs.com">
    <img src="https://github.com/marblejs/marble/blob/master/assets/logo.png?raw=true" width="320" alt="Marble.js logo"/>
  </a>
</p>

## Marble.js benchmarks

Shallow benchmarks for Marble.js comparison to other popular Node.js HTTP frameworks/libraries.

### Setup

1. Install `wrk` - a HTTP benchmarking tool:
    - macOS users: `brew install wrk`
    - Linux users: [instructions](https://github.com/wg/wrk/wiki/Installing-Wrk-on-Linux)
    - Windows users: just install normal system...

2. Just run `npm i`

### Benchmarks

Run benchmarks for *Marble.js*, *Koa*, *Express* and *Restify*:
```bash
npm run bench:routing      ## run routing benchmark
npm run bench:middleware   ## run middleware benchmark
```

## License

marble.js is MIT licensed
