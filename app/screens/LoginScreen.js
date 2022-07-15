import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import FormInput from "../components/forms/FormInput";
import FormSubmit from "../components/forms/FormSubmit";
import FormikCode from "../components/forms/FormikCode";
import ErrorMessage from "../components/forms/ErrorMessage";
import authApi from "../api/auth";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
	phone: Yup.string().required().min(10).max(10).label("Phone Number"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	const auth = useAuth();
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = async ({ phone, password }) => {
		const result = await authApi.login(phone, password);
		if (!result.ok) return setLoginFailed(true);
		setLoginFailed(false);
		auth.logIn(result.data);
		console.log(result);
	};
	return (
		<>
			<Screen style={styles.container}>
				<FormikCode
					initialValues={{ phone: "", password: "" }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<FormInput
						icon="phone"
						keyboardType="phone-pad"
						name="phone"
						placeholder="Enter your phone number **"
						textContentType="telephoneNumber"
					/>
					<FormInput
						autoCapitalize="none"
						autoCorrect={false}
						icon="lock"
						textContentType="password"
						name="password"
						secureTextEntry
						placeholder="Enter your password"
					/>
					<ErrorMessage error="Invalid Phone" visible={loginFailed} />

					<View style={styles.button}>
						<FormSubmit title="Login" />
					</View>
				</FormikCode>
			</Screen>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		padding: 10,
	},
	button: {
		width: "50%",
		marginLeft: "25%",
	},
});
export default LoginScreen;
