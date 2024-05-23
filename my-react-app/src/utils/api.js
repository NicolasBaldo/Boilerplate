import axios from 'axios';

const API_URL = 'https://api.example.com';

class Api {
  constructor(baseURL = API_URL) {
    this.api = axios.create({
      baseURL,
    });

    this.api.interceptors.request.use(this.handleRequest);
    this.api.interceptors.response.use(this.handleResponse, this.handleError);
  }

  handleRequest(config) {
    // Ajouter des tokens ou autres modifications ici
    return config;
  }

  handleResponse(response) {
    return response;
  }

  handleError(error) {
    // Gestion globale des erreurs ici
    return Promise.reject(error);
  }

  get(path, config) {
    return this.api.get(path, config);
  }

  post(path, data, config) {
    return this.api.post(path, data, config);
  }
}

export default new Api();
