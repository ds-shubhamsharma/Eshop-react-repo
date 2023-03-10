// import { showMessage } from "./notification";
import { ToastContainer, toast } from "react-toastify";

const axios = require("axios");

let headers = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL, //"https://goplaygolf.24livehost.com/api", //NodeProject/ChatRestApi
	timeout: 30000,
	timeoutErrorMessage: "Timeout",
	// headers: headers,
	validateStatus: function (status) {
		return status >= 200 && status < 400; // default
	},
});

export const setHeader = (token) => {
	if (token) {
		axios.defaults.headers["token"] = token;
	} else {
		
	}
};
// Add a request interceptor
instance.interceptors.request.use(
	
	function (config) {
		
		const tokens = localStorage.getItem("authToken");

		if (tokens && tokens != null && tokens !== "") {
			config.headers.Authorization = `Bearer ${tokens}`;
		}

		// Do something before request is sent
		
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	function (response) {
		
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		
		const responseData = response.data;
		if (response.status === 200 || response.status === 201) {
			if (!responseData.success) {
				// toast.error(responseData.message);
			}
		}

		return responseData;
	},
	function (error) {
		

		if (error.code == "ERR_NETWORK" || error.code === "ECONNABORTED") {
			toast.error("Network error");
			window.location.href = '/maintenance';

		} else if (error.response.data.code === 401) {
		
			const { message } = error.response.data;
		
		}
		return error.response.data;
	}
);

export default instance;
