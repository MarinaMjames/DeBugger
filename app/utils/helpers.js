import axios from 'axios';
import jwt from 'jsonwebtoken';

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
			localStorage.setItem('token', response.data.token);
			console.log(jwt.decode(response.data.token));
			return response.data;
		}).catch((error) => {
			return error;
		});
	},
	userLogout: (user) => {
		localStorage.removeItem('token');
	}
};

export default helpers;