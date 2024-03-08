import axios, { AxiosInstance } from "axios";

let api_rest: AxiosInstance;

export const setupClient = (backUrl: string) => {
  api_rest = axios.create({
    baseURL: backUrl,
    validateStatus(status) {
      return status < 500;
    },
  });
};

export const apiRest = () => api_rest;
