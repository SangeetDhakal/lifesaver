import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";
import apiClient from "./client";
import AuthContext from "../auth/context";
import React, { useState, useContext, useEffect } from "react";
const endpoint = "/completebRequests";

const getcompleteBRequests = () => apiClient.get(endpoint);

const completeBRequests = (id) => {
	console.log(id);

	apiClient.put(endpoint + "/" + id);
};

export default {
	getcompleteBRequests,
	completeBRequests,
};
