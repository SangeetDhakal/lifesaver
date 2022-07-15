import React, { useState, useContext, useEffect } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	Text,
	TouchableOpacity,
} from "react-native";
// import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AuthContext from "../auth/context";
import myBloodRequests from "../api/myBloodRequests";
import useApi from "../hooks/useApi";
import bRequests from "../api/bRequests";
function MyRequests(props) {
	const { user, setUser } = useContext(AuthContext);

	const [indUser, setIndUser] = useState([]);
	// const [donatedData, setDonatedData] = useState([]);

	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		const response = await myBloodRequests.getMyBRequests(user);
		setIndUser(response.data);
	};

	const data = indUser.bloodRequests;
	const donatedData = indUser.bloodRequests;
	// setDonatedData(data.donatedBy);
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
function SubListItem({ items }) {
	return (
		<Screen>
			<View style={styles.subcontainer}>
				<Text style={styles.sublistname}>{items.name}</Text>
				<Text style={styles.sublistqty}>{items.donatedQuantity}</Text>
			</View>
		</Screen>
	);
}

function ListItem({ items }) {
	const initialValue = false;
	const [expand, setExpand] = useState(initialValue);

	return (
		<Screen>
			<TouchableOpacity onPress={() => setExpand(!expand)}>
				<View style={styles.container}>
					<Text style={styles.date}>{items.dateRequested.split("T")[0]}</Text>
					<Text style={styles.quantityRequested}>{items.quantity}</Text>
					<Text style={styles.quantityReceived}>{items.quantityReceived}</Text>
				</View>
			</TouchableOpacity>
			{expand && (
				<>
					<Text>Donated By</Text>

					<FlatList
						data={items.donatedBy}
						keyExtractor={(item) => item._id}
						renderItem={({ item }) => <SubListItem items={item} />}
					/>
				</>
			)}
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
		flex: 0.5,
		marginLeft: 10,
	},
	quantityRequested: {
		paddingHorizontal: 10,
		fontSize: 15,
		flex: 0.3,
	},
	quantityReceived: {
		paddingHorizontal: 10,
		fontSize: 15,
		flex: 0.2,
	},
	sublistname: {
		flex: 0.8,
		marginLeft: 35,
		backgroundColor: colors.white,
	},
	sublistqty: {
		flex: 0.2,
	},
	subcontainer: {
		flexDirection: "row",
		flex: 1,
		backgroundColor: colors.white,
		padding: 10,
	},
});
export default MyRequests;
