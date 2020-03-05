import {
    REGISTER_START,
    REGISTER_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCHING,
    SUCCESS,
    FAILURE} from '../actions/index';

    const initialState = {
        LoggingIn: false,
        isLoggedIn: false,
        isFetching: false,
        boards: []
    }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case REGISTER_START:
                return {
                    ...state,
                    isLoggedIn: false
                };
            case REGISTER_SUCCESS:
                return {
                    ...state,
                    isLoggedIn: true
                };
            case LOGIN_START:
                return {
                    ...state,
                    LoggingIn: true
                };
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    LoggingIn: false,
                    isLoggedIn: true,
                    token: action.payload
                };
                case FETCHING:
                    return {
                        ...state,
                        isFetching: true,
                    }
                case SUCCESS:
                    return {
                        ...state,
                        // isFetching: false,
                        boards: action.payload,
                        isFetching: false
                    }
                case FAILURE:
                    return {
                        ...state,
                        isFetching: false,
                        err: action.payload
                    }
        
            default:
                return state;
        }
    }

    export default reducer;