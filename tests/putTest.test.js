// putTest.js
const api = require('./../src/api/api.js');

test('PUT request should update user data', async () => {

    const userId = 1;
    const updatedUser = {
        name: 'Jane Smith',
        job: 'Designer',
    };

    await api.putData(userId, updatedUser);
});