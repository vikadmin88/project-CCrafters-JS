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

  async get(req) {
    let params = req.params;
    try {
      return await axios.get(this.#apiBaseUrl + req.reqPoint, {params})
        .then(({ data }) => data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async post(req) {
    let params = req.params;
    try {
      return await axios.post(this.#apiBaseUrl + req.reqPoint, {params})
        .then(response => response);
    } catch (error) {
      throw new AxiosError(error);
    }
  }

  async patch(req) {
    let params = req.params;
    try {
      return await axios.patch(this.#apiBaseUrl + req.reqPoint, {params})
        .then(response => response);
    } catch (error) {
      throw new AxiosError(error);
    }
  }

}