import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import AppButton from "../AppButton";
import bDonates from "../../api/bDonates";
import AuthContext from "../../auth/context";
import { ColorSpace } from "react-native-reanimated";
import publishbRequests from "../../api/publishbRequests";
import useApi from "../../hooks/useApi";

function BloodList({ items }) {
	const { user, setUser } = useContext(AuthContext);

	const initialValue = false;
	const [expand, setExpand] = useState(initialValue);
	return (
		<>
			<TouchableOpacity
				style={styles.container}
				onPress={() => setExpand(!expand)}
			>
				<View style={styles.blood}>
					<View style={styles.circle}>
						<Text style={styles.bloodtext}>{items.bloodGroup}</Text>
					</View>
				</View>
				<View style={styles.quantity}>
					<Text style={styles.text}>{items.quantity}</Text>
				</View>
				<View style={styles.location}>
					<Text>{items.location}</Text>
				</View>
			</TouchableOpacity>
			{expand && (
				<>
					<View style={styles.subcontainer}>
						<View style={styles.location}>
							<Text style={styles.description}>Required For: {items.name}</Text>
							<Text style={styles.description}>
								Required For: {items.reason}
							</Text>
							<Text style={styles.description}>Phone: {items.phone}</Text>
						</View>
					</View>
					<View style={styles.subcontainer}>
						<View style={styles.reason}>
							<Text style={styles.description}>{items.description}</Text>
						</View>
					</View>
					<View style={styles.buttoncontainer}>
						<View style={styles.button}>
							<AppButton
								title="Publish"
								onPress={() => {
									alert("Confirm Publish");
									publishbRequests.publishBRequests(items._id);
								}}
								width="20"
							/>

							<AppButton
								color="secondary"
								title="Delete"
								onPress={() => {
									alert("Confirm Delete.");
									publishbRequests.removeBRequests(items._id);
								}}
								width="20"
							/>
						</View>
					</View>
				</>
			)}
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		// padding: 5,
		backgroundColor: colors.light,
	},
	subcontainer: {
		flexDirection: "row",
		// padding: 5,
		backgroundColor: colors.white,
	},
	blood: {
		justifyContent: "center",
		flex: 0.3,
		flexDirection: "row",
		// padding: 10,
		marginLeft: 45,
		marginVertical: 10,
		// backgroundColor: "red",
	},
	reason: {
		justifyContent: "center",
		flex: 1,
		flexDirection: "column",
		// padding: 10,
		marginLeft: 45,
		marginVertical: 10,
		// backgroundColor: "red",
	},
	quantity: {
		flex: 0.2,
		justifyContent: "center",

		// padding: 10,

		marginVertical: 10,
	},
	location: {
		justifyContent: "center",
		flex: 1,
		flexDirection: "column",
		// padding: 10,
		marginLeft: 45,
		marginVertical: 10,
		// backgroundColor: "red",
	},
	circle: {
		width: 50,
		height: 50,

		// borderRadius: 20,
		borderWidth: 1,
		borderColor: colors.primary,
		borderStyle: "solid",

		justifyContent: "center",
	},
	text: {
		textAlign: "center",
		color: colors.black,
		fontSize: 16,
	},
	bloodtext: {
		textAlign: "center",
		color: colors.primary,
		fontSize: 18,
	},
	description: {
		// textAlign: "center",
		color: colors.black,
		fontSize: 16,
	},
	button: {
		flex: 0.3,
		flexDirection: "row",
	},
	buttoncontainer: {
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		flexDirection: "row",
		flex: 1,
		// padding: 5,
		backgroundColor: colors.white,
	},
});
export default BloodList;
