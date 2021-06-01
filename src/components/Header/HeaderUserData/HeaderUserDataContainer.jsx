import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../../api/api';
import { setAuthUserData } from '../../../redux/authReducer';
import HeaderUserData from './HeaderUserData';

class HeaderUserDataContainer extends React.Component {

    componentDidMount() {
        usersAPI.getAuthData().then(data => {
            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAuthUserData(id, login, email);
            }
        });
    }

    render() {
        return <HeaderUserData {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    login : state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderUserDataContainer)