import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function Picker({ label, onPress }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.text}>{label}</Text>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		marginVertical: 10,

		padding: 16,
		backgroundColor: colors.light,
		borderRadius: 40,
		alignItems: "center",
	},
	text: {
		color: colors.primary,
	},
});
export default Picker;
