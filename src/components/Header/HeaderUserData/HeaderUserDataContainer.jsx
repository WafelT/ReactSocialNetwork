import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../../api/api';
import { setAuthUserData } from '../../../redux/authReducer';
import HeaderUserData from './HeaderUserData';

class HeaderUserDataContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me/', {withCredentials: true}).then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
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