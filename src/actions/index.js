import axios from "axios";
import {AxiosWithAuth} from '../utils/axiosWithAuth';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  console.log('index.js actions line 10');
  console.log(creds);
  return axios
    .post("https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/auth/register", creds)
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
      .post("auth/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
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

export const getArticles = () => dispatch => {
    dispatch({ type: FETCHING })
    axios
        .get('https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/articles/')
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FAILURE, payload: err})
        })
}
