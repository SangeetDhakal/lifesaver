import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text, RefreshControl, FlatList } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import RequirementDisplay from "../components/bloodDisplay/RequirementDisplay";
import Screen from "../components/Screen";
import Header from "../components/Header";
import bRequests from "../api/bRequests";
import AppButton from "../components/AppButton";
import bDonates from "../api/bDonates";
import AuthContext from "../auth/context";
import BloodList from "../components/bloodDisplay/BloodList";

import { TouchableOpacity } from "react-native";
import useApi from "../hooks/useApi";
// const bloodReq = [
// 	{
// 		name: "Sangeet Dhakal",
// 		phone: "9861028334",
// 		label: "A + ",
// 		location: "Teaching",
// 		reason: "operation",
// 		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
// 		quantity: 3,
// 		sn: 1,
// 	},
// {
//         "_id": "62bc5b3789dc891e4efed6b2",
//         "name": "Nikita Karki",
//         "phone": "9841121396",
//         "location": "Kathmandu",
//         "bloodGroup": "A +",
//         "quantity": 3,
//         "hospital": "Teaching",
//         "isPublished": true,
//         "isCompleted": false,
//         "reason": "operation",
//         "description": "met an accident",
//         "user": {
//             "name": "Sangeet Dhakal",
//             "phone": "9861028334",
//             "_id": "62bc5b0e89dc891e4efed6ae"
//         },
//         "dateRequested": "2022-06-29T14:01:27.711Z",
//         "bloodDonates": [],
//         "__v": 0
//     }
// 	{
// 		name: "Nikita Karki",
// 		phone: "9841121396",
// 		label: "B + ",
// 		location: "Patan",
// 		reason: "operation",
// 		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",

// 		quantity: 2,
// 		sn: 2,
// 	},
// 	{
// 		name: "Ashes Aryal",
// 		phone: "9849986603",
// 		label: "A - ",
// 		location: "Dharan",
// 		reason: "accident",
// 		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",

// 		quantity: 1,
// 		sn: 3,
// 	},
// 	{
// 		name: "Manish Chaudhary",
// 		phone: "9841333503",
// 		label: "AB + ",
// 		location: "Jaleshwor",
// 		description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",

// 		reason: "accident",
// 		quantity: 2,
// 		sn: 4,
// 	},
// ];

function BloodRequired({ navigation }) {
	const [refreshing, setRefreshing] = useState(false);
	const { user, setUser } = useContext(AuthContext);
	const {
		data: bloodReq,
		error,
		loading,
		request: loadbRequests,
	} = useApi(bRequests.getBRequests);
	useEffect(() => {
		loadbRequests();
	}, []);

	return (
		<>
			<Screen>
				<Header navigation={navigation} />
				{error && (
					<>
						<Text>Error retriving Date</Text>
						<AppButton title="Retry" onPress={loadbRequests} />
					</>
				)}
				{!error && (
					<>
						<View style={styles.container}>
							<View style={styles.blood}>
								<Text>Blood</Text>
							</View>
							<View style={styles.quantity}>
								<Text>Quantity</Text>
							</View>
							<Text>Location</Text>
						</View>
						{/* <ActivityIndicator visible={loading} /> */}
						<FlatList
							data={bloodReq}
							keyExtractor={(bloods) => bloods._id}
							refreshControl={
								<RefreshControl
									refreshing={refreshing}
									onRefresh={loadbRequests}
								/>
							}
							renderItem={({ item }) => (
								<BloodList
									items={item}
									onPress={() => {
										onPress;
									}}
								/>
							)}
						/>
					</>
				)}
			</Screen>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginLeft: 40,
		padding: 10,
	},
	blood: {
		flex: 0.2,
	},
	quantity: {
		flex: 0.3,
	},
});
export default BloodRequired;
