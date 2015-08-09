var express = require('express');
var React = require('react');
var Component = React.createFactory(require('./component'));

var app = express();

function main(request,response) {
	var msg = request.params.msg || 'Hi from server';
	var comp = Component({msg:msg});
	// res.send(comp);
	response.send(React.renderToString(comp))
}

app.get('',main);
app.get('/:msg',main);

app.listen(4000)