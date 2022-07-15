import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import publishbRequests from "../../api/publishbRequests";
import Screen from "../Screen";
import ModBloodList from "./ModBloodList";

function ModRequirementDisplay({ bloods, onPress }) {
	return (
		<Screen>
			<FlatList
				data={bloods}
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
		</Screen>
	);
}
const styles = StyleSheet.create({});
export default ModRequirementDisplay;
