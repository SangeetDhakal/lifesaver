import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";
import apiClient from "./client";
import AuthContext from "../auth/context";
import React, { useState, useContext, useEffect } from "react";
const endpoint = "/bRequests";

const getBRequests = () => apiClient.get(endpoint);

const sendBRequests = (bRequest, user, onUploadProgress) => {
	var object = {
		name: bRequest.accountName,
		phone: bRequest.phone,
		bloodGroup: bRequest.bloodGroup,
		quantity: bRequest.quantity,
		hospital: bRequest.hospital,
		location: bRequest.location,
		reason: bRequest.reason,
		description: bRequest.description,
		user: user._id,
	};
	var json = JSON.stringify(object);
	console.log(json);

	return apiClient.post(endpoint, json, {
		onUploadProgress: (progress) =>
			onUploadProgress(progress.loaded / progress.total),
	});
};

export default {
	sendBRequests,
	getBRequests,
};
