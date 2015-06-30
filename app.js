
//browserify dependencies
var React = require("react");
var TodoBox = require("./views/index.jsx");

// Parse Json from initial-data div and get the attribute there.
var data = JSON.parse(document.getElementById('initial-data'))
              .getAttribute('data-json');

//Render the TodoBox with the prop given.  Data is coming from program.js
React.render(<TodoBox data="{data}") /> , document.getElementById('app'));
