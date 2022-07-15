import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
function AccountScreen({ navigation }) {
	const { user, setUser } = useContext(AuthContext);

	const handleLogout = () => {
		setUser(null);
		authStorage.removeToken();
	};

	return (
		<Screen style={styles.screen}>
			<View>
				<View style={styles.container}>
					<TouchableOpacity onPress={() => navigation.navigate("UpdateUser")}>
						<ListItem
							title={user.name}
							subTitle={user.phone}
							IconComponent={<Icon name="account" backgroundColor="#ffe66d" />}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.container}>
					<TouchableOpacity onPress={() => navigation.navigate("MyDonations")}>
						<ListItem
							title="My Donations"
							IconComponent={
								<Icon
									name="account-arrow-right-outline"
									backgroundColor="red"
								/>
							}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate("MyRequests")}>
						<ListItem
							title="My Requests"
							IconComponent={
								<Icon
									name="account-arrow-left-outline"
									backgroundColor="green"
								/>
							}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.container}>
					<ListItem
						title="Log Out"
						IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
						onPress={handleLogout}
					/>
				</View>
			</View>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},

	screen: {
		backgroundColor: colors.light,
	},
});
export default AccountScreen;
