import apiClient from "./client";

const endpoint = "/users";
// const getBRequests = () => apiClient.get(endpoint);

const sendUserRequests = (registerUser) => {
	var object = {
		phone: registerUser.phone,
		name: registerUser.accountName,
		location: registerUser.location,
		notification: registerUser.notify,
		password: registerUser.password,
		bloodGroup: registerUser.bloodGroup,
	};
	var json = JSON.stringify(object);

	return apiClient.post(endpoint, json);
};

export default {
	sendUserRequests,
};
