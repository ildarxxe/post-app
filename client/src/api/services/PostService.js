import fetchData from "../apiClient";

class PostService {
    async createPost(data, headers) {
        return fetchData('posts/create', "POST", data, headers);
    }
    async getAll(headers) {
        return fetchData('posts', "GET", null, headers)
    }
    async getPostById(id, headers) {
        return fetchData(`posts/${id}`, "GET", null, headers);
    }
    async update(id, data, headers) {
        return fetchData(`posts/${id}`, "POST", data, headers);
    }
    async deletePost(id, headers) {
        return fetchData(`posts/${id}`, "DELETE", null, headers)
    }
}

const postService = new PostService();
export default postService;