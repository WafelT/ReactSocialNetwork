import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getProfileThunk, setUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileThunk(userId);
        this.props.getStatus(userId);
    }
    
    render() {

        return(
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile : state.profilePage.profile,
    status : state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileThunk, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);