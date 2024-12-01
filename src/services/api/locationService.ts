import axios from "axios";
import { baseUrl } from "../api";

export const fetchProvinces = async () => {
    const response = await axios.get( baseUrl + "/api/provinces/all");
    return response.data;
};

export const fetchDivisions = async () => {
    const response = await axios.get(`${baseUrl}/api/divisions/all`);
    return response.data;
};

  