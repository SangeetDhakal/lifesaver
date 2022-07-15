import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text, FlatList, RefreshControl } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import ModRequirementDisplay from "../components/bloodDisplay/ModRequirementDisplay";
import Screen from "../components/Screen";
import Header from "../components/Header";
import bRequests from "../api/bRequests";
import AppButton from "../components/AppButton";
import bDonates from "../api/bDonates";
import AuthContext from "../auth/context";

import { TouchableOpacity } from "react-native";
import useApi from "../hooks/useApi";
import publishbRequests from "../api/publishbRequests";
import completebRequests from "../api/completebRequests";

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
						<Text style={styles.bloodtext}>{items.name}</Text>
					</View>
				</View>
				<View style={styles.quantity}>
					<Text style={styles.text}>{items.quantity}</Text>
				</View>
				<View style={styles.location}>
					<Text>{items.__v}</Text>
				</View>
			</TouchableOpacity>
			{expand && (
				<>
					<View style={styles.container}>
						<View style={styles.button}>
							<AppButton
								title="Complete"
								onPress={() => {
									alert("Confirm Complete");
									completebRequests.completeBRequests(items._id);
								}}
								width="20"
							/>

							<AppButton
								color="secondary"
								title="Delete"
								onPress={() => {
									alert("Confirm Delete.");
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

function ModPublishBR({ navigation }) {
	const { user, setUser } = useContext(AuthContext);
	const [refreshing, setRefreshing] = useState(false);

	const {
		data: bloodReq,
		error,
		loading,
		request: loadbRequests,
	} = useApi(completebRequests.getcompleteBRequests);
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
								<Text>Requested By</Text>
							</View>
							<View style={styles.quantity}>
								<Text>Quantity</Text>
							</View>
							<Text>Recd Qty</Text>
						</View>
						{/* <ActivityIndicator visible={loading} /> */}
						<FlatList
							data={bloodReq}
							refreshControl={
								<RefreshControl
									refreshing={refreshing}
									onRefresh={loadbRequests}
								/>
							}
							keyExtractor={(bloods) => bloods._id}
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
		flex: 0.4,
	},
	quantity: {
		flex: 0.3,
	},
	button: {
		flex: 0.4,
		flexDirection: "row",
	},
});
export default ModPublishBR;
