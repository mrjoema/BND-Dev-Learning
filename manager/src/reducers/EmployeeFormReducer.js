import {
    EMPLOYEE_UPDATE
} from '../actions/types';
import { action } from 'mobx';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            // [..] --> key interpellation (like reflection, directly reflect the key in here)
            return {...state, [action.payload.prop]: action.payload.value }

        default:
            return state;
    }
}