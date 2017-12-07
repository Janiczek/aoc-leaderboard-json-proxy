const PORT = process.env.PORT || 5000;

const http = require('http');
//const https = require('https');
const Koa = require('koa');
const got = require('got');

const app = new Koa();

app.use(async ctx => {

    const {url, cookie} = ctx.query;
    if (url == null || cookie == null) return;

    const response = await getJson({url, cookie});

    ctx.body = response.body;

});

const getJson = async ({url, cookie}) => {

  return got(url, {
      headers: {
        cookie: `session=${cookie}`
      }
  });

};

http.createServer(app.callback()).listen(PORT);
//https.createServer(app.callback()).listen(443);
