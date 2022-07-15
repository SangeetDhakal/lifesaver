import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Input({
	placeholder,

	icon,

	width = "100%",
	...otherProps
}) {
	return (
		<View style={[styles.container, { width }]}>
			<MaterialCommunityIcons
				style={styles.icon}
				color={colors.primary}
				name={icon}
				size={25}
			/>
			<TextInput
				style={styles.text}
				placeholder={placeholder}
				{...otherProps}
			></TextInput>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",

		padding: 10,

		marginVertical: 5,
		backgroundColor: colors.light,
		borderRadius: 25,
	},
	text: {
		// width: "100%",
		// backgroundColor: "red",
		flex: 1,
		flexWrap: "nowrap",
	},
	icon: {
		marginHorizontal: 10,
	},
});
export default Input;
