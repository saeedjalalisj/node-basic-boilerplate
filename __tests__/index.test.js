const { sayHello } = require('../index');

describe('test', function () {
	test('should return hello world!', () => {
		expect(sayHello()).toBe('hello world!')
	});
});
