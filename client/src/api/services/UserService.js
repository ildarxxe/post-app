import fetchData from "../apiClient";

class UserService {
    async createUser(data, headers) {
        return fetchData('user/create', "POST", data, headers);
    }
    async loginUser(data, headers) {
        return fetchData('user/auth', "POST", data, headers)
    }
    async getMe(headers) {
        return fetchData('user', "GET", null, headers)
    }
    async getAll(headers) {
        return fetchData('users', "GET", null, headers)
    }
    async getUserBySearch(search, headers) {
        return fetchData(`get/user?search=${search}`, "GET", null, headers);
    }
    async getUserById(id, headers) {
        return fetchData(`users/${id}`, "GET", null, headers);
    }
    async deleteUser(headers) {
        return fetchData('user', "DELETE", null, headers)
    }
}

const userService = new UserService();
export default userService;