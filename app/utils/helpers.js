import axios from 'axios';

const helpers = {
	userSignup: (user) => {
		return axios.post('/user/sign-up', user).then((response) => {
			return response.data;
		}).catch((error) => {
			return error;
		});
	},
	userLogin: (user) => {
		return axios.post('/user/login', user).then((response) => {
			return response;
		}).catch((error) => {
			return error;
		});
	}
};

export default helpers;