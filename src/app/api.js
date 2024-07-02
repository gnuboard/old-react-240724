import axios from "axios";


export const serverURL = "https://g6.demo.sir.kr";

export const api = axios.create({
    baseURL: `${serverURL}/api/v1`,
});

export const getNewWrites = async () =>
    api.get("/board-new/writes").then(res => res.data);

export const getWrite = async ({ bo_table, wr_id }) =>{
  const url = `/boards/${bo_table}/writes/${wr_id}`;
  return api.get(url).then(res => res.data).catch(error => {throw error;});
}