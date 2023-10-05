const axios = require('axios');
const baseUrl = 'https://reqres.in/api';

/**
 * Makes a POST request to create a new user.
 * @param {Object} payload - User data to be created.
 * @returns {Promise<Object>} - Response data with created user details.
 */
async function postData(payload) {
    const response = await axios.post(`${baseUrl}/users`, payload);

    expect(response.data.name).toBe('John Doe');
    expect(response.data.job).toBe('Engineer');
}

/**
 * Makes a GET request to retrieve user data.
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<Object>} - Response data with user details.
 */
async function getData(userId) {
    const response = await axios.get(`${baseUrl}/users/${userId}`);

    expect(response.data.data.id).toBe(userId);
    expect(response.data.data).toHaveProperty('email');
    expect(response.data.data).toHaveProperty('first_name');
    expect(response.data.data).toHaveProperty('last_name');
}



/**
 * Makes a PUT request to update user data.
 * @param {number} userId - The ID of the user to update.
 * @param {Object} payload - Updated user data.
 * @returns {Promise<Object>} - Response data with updated user details.
 */
async function putData(userId, payload) {
    const response = await axios.put(`${baseUrl}/users/${userId}`, payload);

    expect(response.data.name).toBe(payload.name);
    expect(response.data.job).toBe(payload.job);

}

/**
 * Makes a DELETE request to delete a user.
 * @param {number} userId - The ID of the user to delete.
 * @returns {Promise<boolean>} - `true` if the user was successfully deleted, otherwise `false`.
 */
async function deleteData(userId) {
    const response = await axios.delete(`${baseUrl}/users/${userId}`);

    const isDeleted = (response.status === 204);
    expect(isDeleted).toBe(true);
}

/**
 * Makes a PATCH request to partially update user data.
 * @param {number} userId - The ID of the user to update.
 * @param {Object} payload - Partially updated user data.
 * @returns {Promise<Object>} - Response data with partially updated user details.
 */
async function patchData(userId, payload) {
    const response = await axios.patch(`${baseUrl}/users/${userId}`, payload);

    expect(response.data.job).toBe(payload.job);
}

module.exports = {
    postData,
    getData,
    putData,
    deleteData,
    patchData,
};
