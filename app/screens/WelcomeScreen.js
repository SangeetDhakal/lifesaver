import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
	return (
		// <ImageBackground
		// 	blurRadius={2}
		// 	style={styles.background}
		// 	source={require("../assets/bg.jpeg")}
		// >
		<View style={styles.buttonsContainer}>
			<AppButton
				title="Login"
				color="primary"
				onPress={() => navigation.navigate("Login")}
			/>
			<AppButton
				title="Register"
				color="secondary"
				onPress={() => navigation.navigate("Register")}
			/>
		</View>
		// </ImageBackground>
	);
}
const styles = StyleSheet.create({
	text: {
		textAlign: "center",
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		backgroundColor: "white",
	},
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	buttonsContainer: {
		padding: 20,
		width: "100%",
	},
});
export default WelcomeScreen;
