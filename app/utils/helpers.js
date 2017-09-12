import axios from 'axios';

const helpers = {
	userSignup: (user) => {
		return axios.post('/user/sign-up', user).then((response) => {
			return response.data;
		});
	}
};

export default helpers;