import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../Screen";
import BloodList from "./BloodList";

function RequirementDisplay({ bloods, onPress }) {
	return (
		<Screen>
			<FlatList
				data={bloods}
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
		</Screen>
	);
}
const styles = StyleSheet.create({});
export default RequirementDisplay;
