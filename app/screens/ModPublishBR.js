import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text, FlatList, RefreshControl } from "react-native";
import ModBloodList from "../components/bloodDisplay/ModBloodList";
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

function ModPublishBR({ navigation }) {
	const [refreshing, setRefreshing] = useState(false);

	const { user, setUser } = useContext(AuthContext);
	const {
		data: bloodReq,
		error,
		loading,
		request: loadbRequests,
	} = useApi(publishbRequests.getpublishBRequests);
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
							refreshControl={
								<RefreshControl
									refreshing={refreshing}
									onRefresh={loadbRequests}
								/>
							}
							keyExtractor={(bloods) => bloods._id}
							renderItem={({ item }) => (
								<ModBloodList
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
export default ModPublishBR;
