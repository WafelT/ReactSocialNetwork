const ADD_POST = 'ADD-POST';
const CHANGE_INPUT_POST_TEXT = 'CHANGE-INPUT-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData : [
        {
            id : 1,
            message : "The cargo ship was blocked in Suez Canal. I think it will be a real punch for world economy.", 
            date : "15.03.2021"
        },
        {
            id : 2,
            message : "Somebody use twitter? Eww...", 
            date : "11.03.2021"
        },
    ],
    inputPostText : '',
    profile : null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                message : state.inputPostText, 
                date : "15.03.2021",
            }
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.inputPostText = '';
            return stateCopy;
        }
        case CHANGE_INPUT_POST_TEXT : {
            return { ...state, inputPostText : action.symbol}
        }
        case SET_USER_PROFILE : {
            return { ...state, profile : action.profile}
        }
        default :
            return state;
    }
}

export let addPostActionCreator = () => ({
    type : ADD_POST,
});

export let setUserProfile = (profile) => ({
    type : SET_USER_PROFILE,
    profile : profile,
});

export let changeInputPostTextActionCreator = (text) => ({
    type : CHANGE_INPUT_POST_TEXT,
    symbol : text,
});

export default profileReducer;