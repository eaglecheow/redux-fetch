import * as ActionTypes from "../action-types/request";

const INITIAL_STATE = {
    data: {}
};

export const request = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_DATA:
        case ActionTypes.CREATE_DATA:
        case ActionTypes.UPDATE_DATA:
        case ActionTypes.REMOVE_DATA: {
            let resultState = {
                _loaded: false,
                _error: false,
                _errorMessage: null,
                result: null
            };

            let newState = Object.assign({}, state, {
                data: state.data
            });

            newState.data[action.target] = resultState;

            return newState;
        }
        case ActionTypes.REQUEST_DATA_SUCCESS:
        case ActionTypes.CREATE_DATA_SUCCESS:
        case ActionTypes.UPDATE_DATA_SUCCESS:
        case ActionTypes.REMOVE_DATA_SUCCESS: {
            let resultState = {
                _loaded: true,
                _error: false,
                _errorMessage: null,
                result: action.result
            };

            let newState = Object.assign({}, state, {
                data: state.data
            });

            newState.data[action.target] = resultState;

            return newState;
        }
        case ActionTypes.REQUEST_DATA_FAIL:
        case ActionTypes.CREATE_DATA_FAIL:
        case ActionTypes.UPDATE_DATA_FAIL:
        case ActionTypes.REMOVE_DATA_FAIL: {
            let resultState = {
                _loaded: true,
                _error: true,
                _errorMessage: action.errorMesage,
                result: null
            };

            let newState = Object.assign({}, state, {
                data: state.data
            });

            newState.data[action.target] = resultState;

            return newState;
        }
        default: {
            return state;
        }
    }
};
