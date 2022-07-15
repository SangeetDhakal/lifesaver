import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text, RefreshControl } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import Header from "../components/Header";
import bRequests from "../api/bRequests";
import AppButton from "../components/AppButton";
import bDonates from "../api/bDonates";
import AuthContext from "../auth/context";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import useApi from "../hooks/useApi";
import publishbRequests from "../api/publishbRequests";
import verifybDonates from "../api/verifybDonates";
import removeBDonates from "../api/verifybDonates";
import completeBDonates from "../api/verifybDonates";
import colors from "../config/colors";
import showbDonates from "../api/showbDonates";

function BloodList({ items }) {
	const initialValue = false;
	const [expand, setExpand] = useState(initialValue);
	return (
		<>
			<TouchableOpacity
				style={styles.container}
				onPress={() => setExpand(!expand)}
			>
				<Text style={styles.donatedBy}>{items.user.name}</Text>
				<Text style={styles.donatedTo}>{items.bRequest.name}</Text>
				<Text style={styles.phone}>{items.bRequest.requestUser.phone}</Text>
			</TouchableOpacity>
			{expand && (
				<>
					<View style={styles.buttoncontainer}>
						<View style={styles.button}>
							<AppButton
								title="Approve"
								onPress={() => {
									alert("Are you sure you want to approve?");
									verifybDonates.completeBDonates(items);
								}}
								width="10"
							/>

							<AppButton
								title="Reject"
								color="secondary"
								onPress={() => {
									alert("Are you sure you want to reject?");
									verifybDonates.removeBDonates(items);
								}}
								width="10"
							/>
						</View>
					</View>
				</>
			)}
		</>
	);
}

function VerifyBD({ navigation }) {
	const [refreshing, setRefreshing] = useState(false);
	const initialValue = false;
	const [expand, setExpand] = useState(initialValue);

	const { user, setUser } = useContext(AuthContext);
	const {
		data: bloodReq,
		error,
		loading,
		request: loadbRequests,
	} = useApi(showbDonates.getBDonates);
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
							<Text style={styles.header}>Donated By</Text>
							<Text style={styles.header}>Donated To</Text>
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
		marginLeft: 0,
		padding: 10,
		backgroundColor: colors.light,
	},
	blood: {
		flex: 0.5,
	},
	quantity: {
		flex: 0.5,
	},
	buttoncontainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		flexDirection: "row",
		flex: 0.3,
	},
	header: {
		marginLeft: 40,
	},
	donatedBy: {
		marginLeft: 40,
	},
	donatedTo: {
		marginLeft: 20,
	},
	phone: {
		marginLeft: 20,
	},
});
export default VerifyBD;
