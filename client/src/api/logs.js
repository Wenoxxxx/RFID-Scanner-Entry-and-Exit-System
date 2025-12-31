import axios from "axios";

export const updateLog = (id, data) => axios.put(`/api/logs/${id}`, data);
export const deleteLog = (id) => axios.delete(`/api/logs/${id}`);