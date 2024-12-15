import axios from "axios";
import { baseUrl } from "../api";


const getToken = () => {
    return sessionStorage.getItem("token"); 
};

export const fetchProvinces = async () => {
    const token = getToken();
    const response = await axios.get(`${baseUrl}/api/provinces/all`, {
        headers: {
            Authorization: `Bearer ${token}`, 
        },
    });
    return response.data;
};

export const fetchDivisions = async () => {
    const token = getToken();
    const response = await axios.get(`${baseUrl}/api/divisions/all`, {
        headers: {
            Authorization: `Bearer ${token}`, 
        },
    });
    return response.data;
};
