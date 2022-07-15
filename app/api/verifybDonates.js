import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";
import apiClient from "./client";
import AuthContext from "../auth/context";
import React, { useState, useContext, useEffect } from "react";
const endpoint = "/completebDonates";

const getverifyBDOnates = () => apiClient.get(endpoint);

const completeBDonates = (items) => {
	console.log(items);

	apiClient.put(endpoint + "/" + items._id);
};

const removeBDonates = (items) => {
	console.log(items);

	apiClient.delete(endpoint + "/" + items._id);
};

export default {
	getverifyBDOnates,
	completeBDonates,
	removeBDonates,
};
