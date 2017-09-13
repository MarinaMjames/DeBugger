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
			// if user successfully logged in...
			if (response.data.success) {
				const token = response.data.token;
				// ...save token in local storage and...
				localStorage.setItem('token', token);
				// ...add 'authorization' header with token to future requests
				helpers.setAuthorizationToken(token);
			}
			// return login in success or errors
			return response.data;
		}).catch((error) => {
			return error;
		});
	},
	userLogout: () => {
		// remove 'authorization' header from server requests
		helpers.setAuthorizationToken();
		// remove token from local storage
		localStorage.removeItem('token');
	},
	setAuthorizationToken: (token) => {
		// if token is passed add 'authorization' header with token
		if (token) {
			axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
		} else {
		// if token is not passed remove 'authorization' header
			delete axios.defaults.headers.common['Authorization'];
		}
	},
	getUser: () => {
		// get token from local storage and decode it to get username
		const token = localStorage.getItem('token');
		const decodedToken = jwt.decode(token);
		var user;
		return user = {
			id: decodedToken.userId,
			username: decodedToken.username
		};
	}
};

export default helpers;