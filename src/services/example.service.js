import axios from 'axios';

class MoviesService {
  constructor() {
    this.api = axios.create({
      //usar las dos 
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/examples
  getMovies = async () => {
    return this.api.get("/api/all-movies");
  }



  // GET /api/examples
  createMovies = async (requestBody) => {
    return this.api.post('/api/crete/movies', requestBody);
  }

  // GET /api/examples/:id
  getOne = async (id) => {
    return this.api.get(`/api//movie/${id}`);
  }

  // PUT /api/examples/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/api/update/${id}`, requestBody);
  }

  // DELETE /api/examples/:id
  deleteProject = async (id) => {
    return this.api.delete(`/api/delete/${id}`);
  } 


}

// Create one instance of the service
const moviesService = new MoviesService();

export default moviesService;