jest.autoMockOff();
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('LoginPage', function () {
    it('has submit button disabled', function () {
        var LoginPage = require('LoginPage');
        var loginPage = TestUtils.renderIntoDocument(React.createElement(LoginPage));
    });
});
