import axios from "axios";

// Function to set up Axios interceptors
export const setupAxiosInterceptors = () => {
	axios.defaults.baseURL = import.meta.env.VITE_APIURL;
	axios.defaults.headers.post["Content-Type"] = "application/json";
};
