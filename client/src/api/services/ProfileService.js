import fetchData from "../apiClient";

class ProfileService {
    async get(headers) {
        return fetchData('profile', "GET", null, headers)
    }
    async update(data, headers) {
        return fetchData('profile', "POST", null, headers)
    }
}

const profileService = new ProfileService();
export default profileService;