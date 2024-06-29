const { authenticate } = require('./../login');
describe('authenticate function', () => {
    global.alert = jest.fn();

    delete global.window.location;
    global.window = Object.create(window);
    global.window.location = { href: '' };

    beforeEach(() => {
        // Clear mocks before each test
        global.alert.mockClear();
        global.window.location.href = '';

        document.getElementById = jest.fn(id => ({
            value: id === 'username' ? 'admin' : id === 'password' ? 'password' : ''
        }));
    });

    it('should redirect to index.html on correct credentials', () => {
        const result = authenticate();
        expect(result).toBeTruthy();
        expect(global.window.location.href).toBe("./../index.html");
    });

    it('should show an alert on incorrect credentials', () => {
        // Override the mock for an incorrect username or password
        document.getElementById = jest.fn(id => ({
            value: id === 'username' ? 'user' : id === 'password' ? '1234' : ''
        }));

        const result = authenticate();
        expect(result).toBeFalsy();
        expect(global.alert).toHaveBeenCalledWith("Invalid username or password");
    });
});
