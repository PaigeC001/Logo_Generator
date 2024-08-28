const Triangle = require('../Triangle');

test('renders a triangle with the correct color', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toBe('<polygon points="150,20 280,180 20,180" fill="blue" />');
});
