import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import myBloodDonations from "../api/myBloodDonations";
// import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AuthContext from "../auth/context";

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
		<Text style={styles.title}>{title}</Text>
	</View>
);

function ListItem({ items }) {
	return (
		<Screen>
			<View style={styles.container}>
				<Text style={styles.date}>{items.dateDonated.split("T")[0]}</Text>
				<Text style={styles.name}>{items.name}</Text>
				<Text style={styles.reason}>{items.reason}</Text>
			</View>
		</Screen>
	);
}

function MyDonations(props) {
	const { user, setUser } = useContext(AuthContext);

	const [indUser, setIndUser] = useState([]);

	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		const response = await myBloodDonations.getMyBDonations(user);
		setIndUser(response.data);
	};

	const data = indUser.bloodDonated;
	return (
		<Screen>
			<FlatList
				data={data}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => <ListItem items={item} />}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flex: 1,
		backgroundColor: colors.light,
		padding: 10,
	},
	date: {
		paddingHorizontal: 10,
		fontSize: 15,
		flex: 0.3,
		textAlign: "center",
	},
	name: {
		paddingHorizontal: 10,
		fontSize: 15,
		flex: 0.4,
	},
	reason: {
		paddingHorizontal: 10,
		fontSize: 15,
		flex: 0.3,
	},
});
export default MyDonations;
