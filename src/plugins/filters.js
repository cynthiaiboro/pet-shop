import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", function (value) {
  if (!value) return "";

  return moment(value).format("MMMM d, YYYY");
});

Vue.filter("formatTime", function (value) {
  if (!value) return "";
  return moment.utc(value).format("h:mm A");
});
