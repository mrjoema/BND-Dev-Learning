import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            console.log("EMPLOYEES_FETCH_SUCCESS in EmployeeReducer");
            return action.payload;
        default:
            return state;
    }
}