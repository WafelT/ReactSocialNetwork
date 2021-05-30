import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, changeInputMessageTextActionCreator } from '../../../../redux/messagesReducer';
import WriteMessage from './WriteMessage';

let mapDispatchToProps = (dispatch) => {
    return {
        takeMessageData : () => {
            dispatch(addMessageActionCreator());
        },

        changeInputMessageText : (text) => {
            dispatch(changeInputMessageTextActionCreator(text));
        },
    }
}

const WriteMessageContainer = connect(null, mapDispatchToProps)(WriteMessage);

export default WriteMessageContainer;