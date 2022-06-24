import axios from "@/plugins/axios";

export const LOGIN = (data) => {
  return axios.post(`/admin/login`, data);
};

export const LOGOUT = () => {
  return axios.get(`/admin/logout`);
};
