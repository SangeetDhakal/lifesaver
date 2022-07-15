import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";
import apiClient from "./client";
import AuthContext from "../auth/context";
import React, { useState, useContext, useEffect } from "react";
import { getItemAsync } from "expo-secure-store";
const endpoint = "/bDonates";

const sendBRequests = (items, user) => {
	var object = {
		user: items._id,
		bRequest: user._id,
	};
	var json = JSON.stringify(object);
	console.log(json);

	apiClient.post(endpoint, json);
	return json;
};

export default {
	sendBRequests,
};
