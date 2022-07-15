import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";
import apiClient from "./client";
import AuthContext from "../auth/context";
import React, { useState, useContext, useEffect } from "react";
const endpoint = "/showbDonates";

const getBDonate = () => apiClient.get(endpoint);

const getBDonates = (user) => {
	// console.log(user);

	apiClient.get(endpoint + "/" + user._id);
};

const removeBDonates = (items) => {
	console.log(items);

	apiClient.delete(endpoint + "/" + items._id);
};

export default {
	getBDonates,
};
