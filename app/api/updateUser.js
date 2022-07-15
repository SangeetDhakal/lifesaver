import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";
import apiClient from "./client";
import AuthContext from "../auth/context";
import React, { useState, useContext, useEffect } from "react";
const endpoint = "/users/";

const getData = (user) => {
	return apiClient.get(endpoint + user._id);
};

const updateData = (registerUser, id) => {
	var object = {
		phone: registerUser.phone,
		name: registerUser.accountName,
		location: registerUser.location,
		notification: registerUser.notify,
		password: registerUser.password,
		bloodGroup: registerUser.bloodGroup,
	};
	var json = JSON.stringify(object);
	console.log(json);

	console.log(endpoint + id);
	return apiClient.put(endpoint + id, json);
};
export default {
	getData,
	updateData,
};
