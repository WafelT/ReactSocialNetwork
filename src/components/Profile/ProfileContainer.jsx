import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { profileThunk, setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.profileThunk(this.props.match.params.userId);
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

export default compose(
    connect(mapStateToProps, {setUserProfile, profileThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);