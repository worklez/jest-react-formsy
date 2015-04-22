var React = require('react');
var Formsy = require('formsy-react');

var Input = React.createClass({
    mixins: [Formsy.Mixin],
    render: function() {
        return React.createElement('input');
    }
});

var LoginPage = React.createClass({
    render: function() {
        return React.createElement(Formsy.Form, {},
            React.createElement(Input, {name: 'username'}));
    }
});
module.exports = LoginPage;
