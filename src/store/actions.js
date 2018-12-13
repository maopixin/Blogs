import {
    SET_LOGIN_STATE,
    SET_MESSAGE_VOICE,
    SET_MESSAGE_VIBRATION
} from './actionType';

export function setMessageVoice(status){
    return {type:SET_MESSAGE_VOICE,status}
}

export function setMessageVibration(status){
    return {type:SET_MESSAGE_VIBRATION,status}
}