import * as axios from "axios";

const instance = axios.create({
    witCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers : {
        'API' : 'cea22af7-b56a-4565-9d35-1255285b109f'
    }
});

export let usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get('users?page=' + currentPage + '&count=' + pageSize)
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