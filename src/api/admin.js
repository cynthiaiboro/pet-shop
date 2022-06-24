import axios from "@/plugins/axios";

export const GET_CUSTOMERS = (params) => {
  return axios.get(`/admin/user-listing`, params);
};

export const CREATE_NEW_CUSTOMER = (params) => {
  return axios.post(`/user/create`, params);
};

export const EDIT_CUSTOMER = (payload) => {
  return axios.put(`/user/edit`, payload);
};

export const DELETE_CUSTOMER = (uuid) => {
  return axios.delete(`/admin/user-delete/${uuid}`);
};
