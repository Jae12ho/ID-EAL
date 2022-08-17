const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

import parse from 'parse'

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.get('/parse', (req, res) => {
    parse
    res.send("parse");
})

let client_id = '1eqNTYUN6vrIPxUbi5q9';
let client_secret = 't0q6DgJB47';
let query = "번역할 문장을 입력하세요.";
app.get('/translate', function (req, res) {
   let api_url = 'https://openapi.naver.com/v1/papago/n2mt';
   let request = require('request');
   let options = {
       url: api_url,
       form: {'source':'ko', 'target':'en', 'text':query},
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.post(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});