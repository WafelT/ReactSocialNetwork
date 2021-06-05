import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsData : state.messagesPage.dialogsData,
        isAuth : state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect,
)(Dialogs);