import axios from "axios";

export const getLogs = (date) =>
  axios.get(`/api/logs`, { params: { date } });

export const getSummary = (date) =>
  axios.get(`/api/logs/summary`, { params: { date } });

export const updateLog = (id, data) =>
  axios.put(`/api/logs/${id}`, data);

export const deleteLog = (id) =>
  axios.delete(`/api/logs/${id}`);