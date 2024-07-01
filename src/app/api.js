import axios from "axios";


export const serverURL = "https://g6.demo.sir.kr";

export const api = axios.create({
    baseURL: `${serverURL}/api/v1`,
});

export const getNewWrites = async () =>
    api.get("/board-new/writes").then(res => res.data);