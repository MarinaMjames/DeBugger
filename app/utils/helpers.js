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
			const token = response.data.token;
			localStorage.setItem('token', token);
			helpers.setAuthorizationToken(token);

			return response.data;
		}).catch((error) => {
			return error;
		});
	},
	userLogout: () => {
		helpers.setAuthorizationToken();
		localStorage.removeItem('token');
	},
	setAuthorizationToken: (token) => {
		if (token) {
			axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
		} else {
			delete axios.defaults.headers.common['Authorization'];
		}
	},
	getUsername: () => {
		const token = localStorage.getItem('token');
		jwt.decode(token);
		return token.username;
	}
};

export default helpers;