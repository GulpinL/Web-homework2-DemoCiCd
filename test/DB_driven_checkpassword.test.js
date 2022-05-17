import userService from '../services/userServices.js';

describe('check two password and one password does not be hashed', () => {
    test('check user password', () => {
        expect(userService.checkPassword('superadmin','superadmin')).toBe(true)
    })
})
