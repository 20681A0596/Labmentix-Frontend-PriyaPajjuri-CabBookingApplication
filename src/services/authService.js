import axios from "axios";

const API = "http://localhost:8080/api/auth";

/* LOGIN USER */

export const loginUser = async (data) => {

    const response = await axios.post(`${API}/login`, data);

    localStorage.setItem("token", response.data.token);

    return response;

};

/* REGISTER USER */

export const registerUser = (data) => {
    return axios.post(`${API}/register`, data);
};