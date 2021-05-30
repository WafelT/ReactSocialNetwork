import React from 'react';
import WritePost from './WritePost';
import { addPostActionCreator, changeInputPostTextActionCreator, } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => ({
        addPost : () => {
            dispatch(addPostActionCreator());
        },
        changeInputPostText : (text) => {
            dispatch(changeInputPostTextActionCreator(text));
        },
    })

const WritePostContainer = connect(null, mapDispatchToProps)(WritePost);

export default WritePostContainer;