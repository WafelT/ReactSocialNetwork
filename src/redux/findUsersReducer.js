const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const FOLLOWING_BTN_DISABLING = 'FOLLOWING_BTN_DISABLING';

let initialState = {
    foundUsers : [],
    pageSize : 5,
    totalUsersCount : 0,
    currentPage : 1,
    isFetching : true,
    followingBtnDisabling : false,
};

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW : {
            return { 
                ...state, 
                foundUsers : state.foundUsers.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed : true}
                    }
                    return user;
                }),
            }
        }

        case UNFOLLOW : {
            return { 
                ...state, 
                foundUsers : state.foundUsers.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed : false}
                    }
                    return user;
                }),
            }
        }

        case SET_USERS : {
            return { ...state, foundUsers: action.foundUsers }
        }

        case SET_CURRENT_PAGE : {
            return { ...state, currentPage : action.currentPage }
        }

        case SET_CURRENT_PAGE : {
            return { ...state, currentPage : action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT : {
            return { ...state, totalUsersCount : 20 }
        }

        case TOGGLE_PRELOADER : {
            return { ...state, isFetching : action.isFetching }
        }

        case FOLLOWING_BTN_DISABLING : {
            return { ...state, followingBtnDisabling : action.disabled }
        }

        default : 
            return state;
    }
}

export let follow = (userId) => ({
    type : FOLLOW,
    userId
});

export let unFollow = (userId) => ({
    type : UNFOLLOW,
    userId
});

export let setUsers = (foundUsers) => ({
    type : SET_USERS,
    foundUsers
});

export let setCurrentPage = (currentPage) => ({
    type : SET_CURRENT_PAGE,
    currentPage
});

export let setTotalUsersCount = (usersCount) => ({
    type : SET_TOTAL_USERS_COUNT,
    usersCount
});

export let togglePreloader = (isFetching) => ({
    type : TOGGLE_PRELOADER,
    isFetching
});

export let toggleFollowingBtnDisabling = (disabled) => ({
    type : FOLLOWING_BTN_DISABLING,
    disabled,
});

export default findUsersReducer;