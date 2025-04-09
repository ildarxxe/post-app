import fetchData from "../apiClient";

class AdminService {
    async getProfileById(id, headers) {
        return fetchData(`posts/${id}`, "POST", null, headers);
    }
}

const adminService = new AdminService();
export default adminService;