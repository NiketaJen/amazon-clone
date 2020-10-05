import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-4c78a/us-central1/api' //The API (cloud function) url
});

export default instance
//allows fetching, post requests