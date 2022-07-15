import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native";

function Header({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Life Saver</Text>

			<View style={styles.iconContainer}>
				<TouchableOpacity onPress={() => navigation.navigate("MyRequests")}>
					<MaterialCommunityIcons
						style={styles.icon}
						name="chat-processing-outline"
						size={25}
						color={colors.medium}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
					<MaterialCommunityIcons
						style={styles.icon}
						name="account-outline"
						size={25}
						color={colors.medium}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		// backgroundColor: "red",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 20,
		borderBottomWidth: 1.6,
		borderColor: colors.light,
		padding: 10,
	},
	iconContainer: {
		flexDirection: "row",
	},
	icon: {
		marginLeft: 20,
		// resizeMode: "contain",
	},
});
export default Header;
