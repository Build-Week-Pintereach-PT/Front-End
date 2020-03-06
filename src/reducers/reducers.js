import {
    REGISTER_START,
    REGISTER_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCHING,
    SUCCESS,
    FAILURE,
    ADD_BOARD_START,
    ADD_BOARD_SUCCESS,
    ADD_BOARD_FAILURE,
    EDIT_BOARD_START,
    EDIT_BOARD_SUCCESS,
    EDIT_BOARD_FAILURE,
    DELETE_BOARD_START,
    DELETE_BOARD_FAILURE} from '../actions/index';

    const initialState = {
        LoggingIn: false,
        isLoggedIn: false,
        isFetching: false,
        editing: false,
        boards: [],
        articles: [],

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
                case ADD_BOARD_START:
                    return {
                        ...state,
                        boards: [...state.boards, action.payload],
                        addBoard: true
                    }
                case EDIT_BOARD_START:
                    return {
                        ...state,
                        editing: true
                    }
                case EDIT_BOARD_SUCCESS: 
                    return {
                        ...state,
                        boards: state.boards.map(board => {
                            console.log('reducer', board.id, action.payload )
                            console.log("edit reducer", action.payload.id, action.payload.object)
                            if (board.id === action.payload.id) {
                               
                                return action.payload.object
                            }
                            else {
                                return board;
                            }
                       })
                   }
                   case DELETE_BOARD_START:
                       return {
                        ...state,
                        boards: state.boards.filter(board => (
                            board.id != action.payload
                        ))
                       }
            
            default:
                return state;
        }
    }

    export default reducer;