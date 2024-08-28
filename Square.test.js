const Square = require('../Square');

test('renders a square with the correct color', () => {
    const shape = new Square('green');
    expect(shape.render().trim()).toBe('<rect x="75" y="50" width="150" height="150" fill="green" />');
});
