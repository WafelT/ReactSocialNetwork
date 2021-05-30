import React from 'react';
import AboutUser from './AboutUser/AboutUser';
import HeaderImage from './HeaderImage/HeaderImage';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return(
        <div>
            <HeaderImage />
            <AboutUser profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;