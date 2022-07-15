import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";
import apiClient from "./client";
import AuthContext from "../auth/context";
import React, { useState, useContext, useEffect } from "react";
const endpoint = "/publishbRequests";

const getpublishBRequests = () => apiClient.get(endpoint);

const publishBRequests = (id) => {
	console.log(id);

	apiClient.put(endpoint + "/" + id);
};

const removeBRequests = (id) => {
	console.log(id);

	apiClient.delete(endpoint + "/" + id);
};

export default {
	getpublishBRequests,
	publishBRequests,
	removeBRequests,
};
