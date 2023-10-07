const api = require('./../src/api/api.js');


describe("API Testing", () => {

    const userId = 1;
    test('POST request should create a new user', async () => {

        const user = {
            name: 'John Doe',
            job: 'Engineer',
        };

        await api.postData(user);

    });

    test('GET request should retrieve user data', async () => {

        await api.getData(userId);

    });

    test('PUT request should update user data', async () => {

        const updatedUser = {
            name: 'Jane Smith',
            job: 'Designer',
        };

        await api.putData(userId, updatedUser);
    });

    test('PATCH request should update user data partially', async () => {

        const updatedUser = {
            job: 'Manager',
        };
        await api.patchData(userId, updatedUser);

    });


    test('DELETE request should delete a user', async () => {

        await api.deleteData(userId);

    });



});
