import axios from "axios";

export const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://build-week-pintereach-pt.herokuapp.com",
        headers: {
            Authorization: token
        }
    });
};