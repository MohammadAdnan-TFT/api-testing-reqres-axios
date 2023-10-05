// patchTest.js
const api = require('./../src/api/api.js');

test('PATCH request should update user data partially', async () => {

    const userId = 1;
    const updatedUser = {
        job: 'Manager',
    };
    await api.patchData(userId, updatedUser);

});