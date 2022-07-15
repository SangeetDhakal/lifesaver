import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";
const storeToken = async (authToken) => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.log("Error storing auth token", error);
	}
};

const getToken = async () => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log("Error storing auth token", error);
	}
};

const getUser = async () => {
	const token = await getToken();
	if (token) return jwtDecode(token);
	return null;
};

const userId = async () => {
	const token = await getToken();
	const decodedToken = jwtDecode(token);

	return decodedToken;
};

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log("Error removing Auth Token", error);
	}
};

export default { getUser, userId, getToken, removeToken, storeToken };
