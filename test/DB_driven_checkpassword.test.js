import userService from '../services/userServices.js';

describe('check two password and one password does not be hashed', () => {
    test('check user password', () => {
        // expect(userService.checkPassword('superadmin','superadmin1')).toBe(true)// ham nay SAI
        expect(userService.checkPassword('superadmin','$2a$08$90W4BgeNeqdaEOyXY2aANeyYQJaJjPNbx1L6LMA87tWfuB4GeQvXm')).toBe(true)//Ham nay DUNG
    })
})
