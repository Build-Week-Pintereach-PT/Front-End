import axios from "axios";

export const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://cors-anywhere.herokuapp.com/https://pintreachbackend.herokuapp.com/api/",
        headers: {
            Authorization: token
        }
    });
};