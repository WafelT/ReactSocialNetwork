import axios from "axios";

let instance = axios.create({
    witCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
});

let usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },

    getAuthData() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        })
    },
    deleteUnfollow(id) {
        return instance.delete('follow/' + id)
        .then(response => {
            return response.data;
        })
    },
    postFollow(id) {
        return instance.post('follow/' + id, {})
        .then(response => {
            return response.data;
        })
    }
}