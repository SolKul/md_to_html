// ファイル入出力
var fs = require('fs');
var default_svg = fs.readFileSync("sample.svg", "utf8");

// express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.text({ type:'*/*' }));


// mathjax
var mjAPI = require("mathjax-node");

mjAPI.config({
    MathJax: {
      // traditional MathJax configuration
    }
  });
mjAPI.start();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(default_svg);
});

app.post('/convert', function(req, res) {
    console.log(req.body)

    mjAPI.typeset({
        math: req.body,
        format: "TeX", // "inline-TeX", "MathML"
        svg: true,
        width: 40
      }, function (data) {
        if (!data.errors) {
            res.setHeader('Content-Type', 'text/plain');
            res.send(data.svg);
        }
        else{
            res.end()
        }
    });

});

app.listen(8080);