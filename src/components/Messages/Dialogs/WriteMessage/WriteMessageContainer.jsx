import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../../../redux/messagesReducer';
import WriteMessage from './WriteMessage';

let mapDispatchToProps = (dispatch) => {
    return {
        takeMessageData : (messageInput) => {
            dispatch(addMessageActionCreator(messageInput));
        },
    }
}

const WriteMessageContainer = connect(null, mapDispatchToProps)(WriteMessage);

export default WriteMessageContainer;