var React = require('react');

var Component = React.createClass({
	render: function() {
		return React.createElement('h1', null, this.props.msg);
	}
});

module.exports = Component;