// getTest.js
const api = require('./../src/api/api.js');

test('GET request should retrieve user data', async () => {

    const userId = 1;
    const response = await api.getData(userId);

});