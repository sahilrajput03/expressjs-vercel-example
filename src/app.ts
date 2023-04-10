import express from 'express';
import type { Application, Request, Response } from 'express';

const app: Application = express();
import { v4 } from 'uuid';

const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello there user');
});

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

// app.listen(port, function () {
//   console.log(`App is listening on port ${port} !`);
// });

module.exports = app;
