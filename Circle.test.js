const Circle = require('../Circle');

test('renders a circle with the correct color', () => {
    const shape = new Circle('red');
    expect(shape.render().trim()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});
