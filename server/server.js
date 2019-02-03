
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const uuid = require('uuid/v4');

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter({ "/carts/:cartId/items/:itemId": "/items/:itemId" }))
server.use('/carts', (req, res, next) => {
  if (req.method === 'POST' && !req.headers.cookie) {
    const id = uuid();
    req.body = { id };
    res.setHeader('set-cookie', `X-salt-session=${id}`)
  }
  next();
});

server.use('/items', (req, res, next) => {
  if (req.method === 'POST') {
    next();
  }
});

server.use(router);

server.listen(8080, () => {
  console.log('JSON Server is running on port 8080');
});