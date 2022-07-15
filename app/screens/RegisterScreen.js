import React, { useState } from "react";
import { View, StyleSheet, Text, Switch, ImageBackground } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Input from "../components/Input";
import useAuth from "../auth/useAuth";

import Screen from "../components/Screen";
import authApi from "../api/auth";
import Picker from "../components/Picker";
import BloodPicker from "../components/BloodPicker";
import * as Yup from "yup";
import { FormikCode, FormInput, FormSubmit } from "../components/forms";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import register from "../api/register";
import useApi from "../hooks/useApi";

const bloodGroups = [
	{
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
		label: "A + ",
		value: 1,
	},
	{
		backgroundColor: "#fd9644",
		icon: "car",
		label: "A -",
		value: 2,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "AB +",
		value: 3,
	},
	{
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
		label: "AB - ",
		value: 4,
	},
	{
		backgroundColor: "#fd9644",
		icon: "car",
		label: "B +",
		value: 5,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "B -",
		value: 6,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "O +",
		value: 6,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "O -",
		value: 6,
	},
];

const validationSchema = Yup.object().shape({
	phone: Yup.string().required().min(10).max(10).label("Phone Number"),
	accountName: Yup.string().required().min(4).label("Name"),
	location: Yup.string().required().min(4).label("Location"),
	bloodGroup: Yup.string().required().label("Blood Group"),
});

function RegisterScreen(props) {
	const registerApi = useApi(register.sendUserRequests);
	const loginApi = useApi(authApi.login);
	const auth = useAuth();
	const [error, setError] = useState();
	const [category, setCategory] = useState();
	const [isEnabled, setIsEnabled] = useState(true);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const handleSubmit = async (registerUser) => {
		const result = await registerApi.request(registerUser);

		// console.log(authStorage.userId());
		console.log(result);

		const { data: authToken } = await loginApi.request(
			registerUser.phone,
			registerUser.password
		);
		auth.logIn(authToken);
	};

	return (
		<>
			<Screen style={styles.container}>
				<Formik
					initialValues={{
						phone: "",
						accountName: "",
						location: "",
						bloodGroup: "",
						notify: "true",
					}}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					{({ setFieldValue }) => (
						<>
							<FormInput
								icon="phone"
								name="phone"
								keyboardType="phone-pad"
								placeholder="Enter your phone number **"
								textContentType="telephoneNumber"
							/>
							<FormInput
								icon="lock-outline"
								name="password"
								placeholder="Create a password"
								textContentType="password"
							/>
							<FormInput
								autocorrect={false}
								name="accountName"
								icon="account"
								placeholder="Enter your name"
								autocorrect={false}
								textContentType="name"
							/>
							<FormInput
								icon="pin"
								name="location"
								autocorrect={false}
								placeholder="Enter your location"
								textContentType="location"
							/>
							<BloodPicker
								selectedItem={category}
								onSelectItem={(item) => {
									setFieldValue("bloodGroup", item.label);
									setCategory(item);
								}}
								noOfColumns={1}
								bloodGroup={bloodGroups}
								placeholder="Blood Group"
								// onPress={() => console.log("Blood Group")}
							/>

							<View style={styles.switch}>
								<Text style={{ padding: 10, flex: 0.9, marginLeft: 10 }}>
									Do you want to be notified when there is a blood requirement
									matching your blood group ?
								</Text>
								<Switch
									style={{ marginTop: 10 }}
									trackColor={{ false: colors.light, true: colors.primary }}
									thumbColor={isEnabled ? colors.white : colors.white}
									ios_backgroundColor={colors.white}
									value={isEnabled}
									onValueChange={toggleSwitch}
									onChange={() => setFieldValue("notify", !isEnabled)}
								/>
							</View>
							<View style={styles.button}>
								<FormSubmit title="Register" />
							</View>
						</>
					)}
				</Formik>
			</Screen>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
		justifyContent: "center",
	},
	button: {
		width: "50%",
		marginLeft: "25%",
	},
	switch: {
		flexDirection: "row",
	},
});
export default RegisterScreen;
