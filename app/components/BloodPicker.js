import React, { useState } from "react";

import {
	View,
	StyleSheet,
	Modal,
	Button,
	FlatList,
	Text,
	TouchableWithoutFeedback,
} from "react-native";
import Picker from "./Picker";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

function BloodPicker({
	placeholder,
	selectedItem,
	onSelectItem,
	bloodGroup,
	noOfColumns,
}) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					<MaterialCommunityIcons
						style={styles.icon}
						color={colors.primary}
						name="water"
						size={25}
					/>
					<Text style={styles.text}>
						{selectedItem ? selectedItem.label : placeholder}
					</Text>
					<MaterialCommunityIcons
						style={styles.icon}
						color={colors.primary}
						name="arrow-down-drop-circle-outline"
						size={25}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button
						title="Close"
						color={colors.secondary}
						onPress={() => setModalVisible(false)}
					/>
					<FlatList
						numColumns={noOfColumns}
						data={bloodGroup}
						keyExtractor={(bloodGroup) => bloodGroup.label.toString()}
						renderItem={({ item }) => (
							<Picker
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
									// console.log(item.label);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		padding: 11,
		marginVertical: 10,
		width: "100%",
	},
	text: {
		color: colors.primary,
		flex: 1,
		marginTop: 5,
	},
	icon: {
		marginHorizontal: 10,
	},
});
export default BloodPicker;
