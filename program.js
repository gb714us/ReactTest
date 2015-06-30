//Require React, ExpressJS, and init ExpressJS
var React = require('react');
var express = require('express');
var app = express();

//Shadow Dom elements
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');

//initialize the app setting port from command line or 3000
app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

require('node-jsx').install();

// Require the module made in the JSX file
var TodoBox = require('./views/index.jsx')

//Data we will be passing to React FE
var data = [{title: "Shopping", detail: process.argv[3]},
{title: "Hair cut", detail: process.argv[4]}]

//render the index while passing it the data as json.
// app.use('/', function(req, res) {
//   res.render('index', {data: data});
// });

app.use('bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./app.js')
  .transform('reactify')
  .bundle()
  .pipe(res);
});

app.use('/', function(req, res) {
  var initialData = JSON.stringify(data);
  var markup = React.renderToString(React.createElement(TodoBox, {data: data}));

  res.setHeader('Content-Type', 'text/html');

  var html = React.renderToStaticMarkup(body(null,
    div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
    script({id: 'initial-data',
      type: 'text/plain',
      'data-json': initialData
    }),
    script({src: '/bundle.js'})
  ));

  res.end(html);
});
//Listen to 3000 port with no callback
app.listen(app.get('port'), function() {});
