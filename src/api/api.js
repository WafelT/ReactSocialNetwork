import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY' : 'cea22af7-b56a-4565-9d35-1255285b109f'},
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    
    getProfile(userId) {
        console.warn('Obsolete method. Please use the new one!');
        return profileAPI.getProfile(userId)
    },

    unFollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then(response => response.data)
    },

    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then(response => response.data)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },

    getStatus(status) {
        return instance.put('profile/status/', { status: status });
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get('auth/me').then(response => response.data)
    },
}
