import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { usersAPI } from '../../api/api';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10;
        }
        usersAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }
    
    render() {
        return(
            <Profile profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile : state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);