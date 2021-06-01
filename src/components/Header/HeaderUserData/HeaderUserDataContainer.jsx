import React from 'react';
import { connect } from 'react-redux';
import { authThunk, setAuthUserData } from '../../../redux/authReducer';
import HeaderUserData from './HeaderUserData';

class HeaderUserDataContainer extends React.Component {

    componentDidMount() {
        this.props.authThunk();
    }

    render() {
        return <HeaderUserData {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    login : state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData, authThunk})(HeaderUserDataContainer);