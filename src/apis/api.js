import axios from "axios";

export default axios.create({
  baseURL: "https://sandbox.handelsbanken.com/openbanking/psd2/v2/accounts",
  headers: {
    accept: "application/json",
    authorization: "Bearer MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI1",
    "x-ibm-client-id": "8e4b7114-7ac6-4369-b418-131b805f8341",
    "psu-ip-address": "127.0.0.1",
    "tpp-transaction-id": "123545",
    "tpp-request-id": "34563"
  }
});
