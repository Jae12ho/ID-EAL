const makeId = require('./makeID');
const cors = require('cors');
const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: 'http://localhost'}));

app.get('/get', wrap(async (req, res) => {
  res.json(await makeId.run(req.query));
}))

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.end();
})

function wrap(asyncFn) {
  return async (req, res, next) => {
    try {
      await asyncFn(req, res, next);
    } catch (err) {
      next(err);
    }
  }
}

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});