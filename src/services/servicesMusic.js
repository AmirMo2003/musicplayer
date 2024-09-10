import axios from "axios";

const URL = "http://localhost:9000";



export const AllMusic = () => {
    const url = `${URL}/music`;
    return axios.get(url)
};

export const AllAllbum = () => {
    const url = `${URL}/allbum`;
    return axios.get(url)
}