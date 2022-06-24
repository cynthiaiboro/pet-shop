import {
  GET_CUSTOMERS,
  CREATE_NEW_CUSTOMER,
  EDIT_CUSTOMER,
  DELETE_CUSTOMER,
} from "@/api/admin";

export default {
  getAllCustomers({ commit }, payload) {
    return new Promise((resolve, reject) => {
      GET_CUSTOMERS(payload)
        .then(({ data }) => {
          commit("GET_CUSTOMERS", data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  createNewCustomer(payload) {
    return new Promise((resolve, reject) => {
      CREATE_NEW_CUSTOMER(payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  editCustomer(payload) {
    return new Promise((resolve, reject) => {
      EDIT_CUSTOMER(payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  deleteCustomer(payload) {
    return new Promise((resolve, reject) => {
      DELETE_CUSTOMER(payload)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
