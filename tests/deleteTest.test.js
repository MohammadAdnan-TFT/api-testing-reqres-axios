// deleteTest.js
const api = require('./../src/api/api.js');

test('DELETE request should delete a user', async () => {

    const userId = 1;
    await api.deleteData(userId);

});