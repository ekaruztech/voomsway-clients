import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const defaultOptions = {
	baseURL: process.env.VOOMSWAY_API_HOST,
	headers: {},
};

const instance = axios.create(defaultOptions);

instance.interceptors.request.use(
	config => {
		config.headers['x-api-key'] = process.env.VOOMSWAY_API_KEY;
		return config;
	},
	error => {
		// Do something with request error
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	response => {
		// Do something with response data
		return response.data;
	},
	error => {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			throw error.response.data;
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log('error request', error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message);
		}
	}
);

/**
 * Get User by id
 * @param {Object} config The request object
 * @return {Object} res The response object
 */
const createRequest = config => instance(config);

const APPRequest = {
	/**
	 * Get Terminals of a company
	 * @param {Object} query a company
	 * @return {Object} res The response object
	 */
	async getTerminals(query) {
		const config = {
			method: 'get',
			url: '/terminals',
			params: { population: JSON.stringify(['destinations']), ...query }
		};
		return createRequest(config)
			.then(response => response,
				err => {
					console.log('err >>>>>>>> ', err);
					return {};
				});
	},
	
	async getAccount(apiKey) {
		const config = {
			method: 'get',
			url: `/api/account/${apiKey}`
		};
		return createRequest(config)
			.then(response => response,
				err => {
					return {};
				});
	}
};

export default APPRequest;
