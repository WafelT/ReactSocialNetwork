import React from 'react';
import WritePost from './WritePost';
import { addPostActionCreator } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => ({
        addPost : (postInput) => {
            dispatch(addPostActionCreator(postInput));
        },
    })

const WritePostContainer = connect(null, mapDispatchToProps)(WritePost);

export default WritePostContainer;