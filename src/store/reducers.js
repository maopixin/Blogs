// combineReducers 工具函数，用于组织多个reducer，并返回reducer集合
import {combineReducers} from 'redux'
import defaultState from './state'
import {
    SET_LOGIN_STATE,
    SET_MESSAGE_VOICE,
    SET_MESSAGE_VIBRATION
} from './actionType';


function messageVoice ( state = defaultState.isVoiceMessage, action ){
    switch (action.type) {
        case SET_MESSAGE_VOICE:
            return action.status;
        default:
            return state;
    }
}
function messageVibration ( state = defaultState.isVibrationMessage, action ){
    switch (action.type) {
        case SET_MESSAGE_VIBRATION:
            return action.status;
        default:
            return state;
    }
}

export default combineReducers({
    messageVoice,
    messageVibration
})