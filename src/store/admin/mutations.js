export default {
  GET_CUSTOMERS(state, customers) {
    state.customers = customers;
  },
  ADD_CUSTOMER(state, payload) {
    state.customers.push(...payload);
  },
};
