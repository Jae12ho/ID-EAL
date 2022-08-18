const makeId = require('./makeID');
const cors = require('cors');
const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: 'http://127.0.0.1:3000', credentials: true }));

app.get('/get', async (req, res) => {
  console.log(req.query);
  res.json(await makeId.run(req.query));
})

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});