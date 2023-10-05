// postTest.js
const api = require('./../src/api/api.js');

test('POST request should create a new user', async () => {

    const user = {
        name: 'John Doe',
        job: 'Engineer',
    };

    await api.postData(user);

});








