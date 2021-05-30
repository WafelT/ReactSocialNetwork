import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps= (state) => {
    return {
        postData : state.profilePage.postData,
        profile : state.profilePage.profile,
    }
}

let MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;