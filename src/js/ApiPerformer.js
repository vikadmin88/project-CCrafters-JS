import axios, { AxiosError } from "axios";

export class ApiPerformer {
  #apiBaseUrl;

  constructor(apiUrl) {
    this.#apiBaseUrl = apiUrl;
  }

  get apiUrl() {
    return this.#apiBaseUrl;
  }

  set apiUrl(value) {
    this.#apiBaseUrl = value;
  }

  async get(reqPoint, params) {
    try {
      return await axios.get(this.#apiBaseUrl + reqPoint, { params })
        .then(({ data }) => data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async post(reqPoint, params) {
    try {
      return await axios.post(this.#apiBaseUrl + reqPoint, { params })
        .then(response => response);
    } catch (error) {
      throw new AxiosError(error);
    }
  }

  async patch(reqPoint, params) {
    try {
      return await axios.patch(this.#apiBaseUrl + reqPoint, { params })
        .then(response => response);
    } catch (error) {
      throw new AxiosError(error);
    }
  }

}