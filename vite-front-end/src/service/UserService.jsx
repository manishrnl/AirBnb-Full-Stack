// src/services/userService.js
import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1";
// Fetch all users

export const getRooms = () => axios.get(`${BASE_URL}/admin/hotels/1/rooms`);

export const addUser = (user) => {
    return axios.post("http://localhost:8080/users", user);
};
// Update a user
export const updateUser = (id, user) => axios.put(`http://localhost:8080/users/${id}`, user);

// Delete a user
export const deleteUser = (id) => axios.delete(`http://localhost:8080/users/${id}`);
