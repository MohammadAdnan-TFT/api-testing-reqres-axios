const api = require('./../src/api/api.js');


describe("API Testing", () => {

    const userId = 1;
    test('POST request should create a new user', async () => {

        const user = {
            name: 'John Doe',
            job: 'Engineer',
        };

        const response = await api.postData(user);

        expect(response.data.name).toBe('John Doe');
        expect(response.data.job).toBe('Engineer');
        expect(response.status).toBe(201);

    });

    test('GET request should retrieve user data', async () => {

        const response = await api.getData(userId);

        expect(response.data.data.id).toBe(userId);
        expect(response.data.data).toHaveProperty('email');
        expect(response.data.data).toHaveProperty('first_name');
        expect(response.data.data).toHaveProperty('last_name');
        expect(response.status).toBe(200);

    });

    test('PUT request should update user data', async () => {

        const updatedUser = {
            name: 'Jane Smith',
            job: 'Designer',
        };

        const response = await api.putData(userId, updatedUser);

        expect(response.data.name).toBe(updatedUser.name);
        expect(response.data.job).toBe(updatedUser.job);
        expect(response.status).toBe(200);
    });

    test('PATCH request should update user data partially', async () => {

        const updatedUser = {
            job: 'Manager',
        };
        const response = await api.patchData(userId, updatedUser);

        expect(response.data.job).toBe(updatedUser.job);
        expect(response.status).toBe(200);

    });


    test('DELETE request should delete a user', async () => {

        const response = await api.deleteData(userId);

        expect(response.status).toBe(204);

    });



});
