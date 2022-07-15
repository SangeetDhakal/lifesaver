import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";
import apiClient from "./client";
import AuthContext from "../auth/context";
import React, { useState, useContext, useEffect } from "react";
const endpoint = "/users/";

const getMyBRequests = (user) => {
	return apiClient.get(endpoint + user._id);
};
export default {
	getMyBRequests,
};
