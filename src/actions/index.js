import axios from "axios";
import {AxiosWithAuth} from '../utils/axiosWithAuth';
import Axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  console.log('index.js actions line 10');
  console.log(creds);
  return axios
    .post("https://build-week-pintereach-pt.herokuapp.com/api/user/register", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return AxiosWithAuth()
      .post("/api/user/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.message.token);
        console.log("from login action", res);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.id });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAILURE, payload: err });
      });
  };

export const FETCHING  = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getBoards = (id) => dispatch => {
    dispatch({ type: FETCHING })
    AxiosWithAuth()
        .get(`/api/boards`)
        .then(res => {
          console.log("from get", res)
            dispatch({ type: SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FAILURE, payload: err})
        })
}

export const ADD_BOARD_START = "ADD_BOARD_START";
export const ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
export const ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";

  export const addBoards = (item) => dispatch => {
    AxiosWithAuth()
      .post(`/api/boards`, item)
      .then(res => {
        dispatch({ type: ADD_BOARD_START, payload: res.data})
      })
      .catch(err => {
        dispatch({ type: FAILURE, payload: err})
      })
  }

export const EDIT_BOARD_START = "EDIT_BOARD_START";
export const EDIT_BOARD_SUCCESS = "EDIT_BOARD_SUCCESS";
export const EDIT_BOARD_FAILURE = "EDIT_BOARD_START";

  export const editBoards = (id, { user_id, name }) => dispatch => {
    console.log("from PUT", { user_id, name })
    let  theGoods = { user_id, name };
    dispatch({ type: EDIT_BOARD_START })
    AxiosWithAuth()
    .put(`/api/boards/${id}`, theGoods)
    .then(res => {
      console.log("from PUT", res.data)
      dispatch({type: EDIT_BOARD_SUCCESS, payload: {id: id, object: {user_id, name, id}}})
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err})
    })
  }

  export const DELETE_BOARD_START = "DELETE_BOARD_START";
  export const DELETE_BOARD_FAILURE = "DELETE_BOARD_FAILURE";

  export const deleteBoards = (id) => dispatch => {
    AxiosWithAuth()
    .delete(`/api/boards/${id}`)
    .then(res => {
      dispatch({type: DELETE_BOARD_START, payload: id })
      
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err})
    })
  }

