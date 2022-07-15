import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountNavigator from "./AccountNavigator";
import React from "react";
import BloodRequired from "../screens/BloodRequired";
import AskBlood from "../screens/AskBlood";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AccountScreen from "../screens/AccountScreen";
import VerifyDonations from "../screens/VerifyDonations";
import AccountNavigatorRequest from "./AccountNavigatorRequest";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator
		initialRouteName="Donate "
		tabBarOptions={{
			activeBackgroundColor: colors.primary,
			activeTintColor: colors.white,
			inactiveBackgroundColor: colors.light,
			inactiveTintColor: colors.black,
		}}
	>
		<Tab.Screen
			name="Edit"
			component={VerifyDonations}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name="account-arrow-left-outline"
						size={size}
						color={color}
					/>
				),
			}}
		/>
		<Tab.Screen
			name="Request"
			component={AccountNavigatorRequest}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name="account-arrow-left-outline"
						size={size}
						color={color}
					/>
				),
			}}
		/>
		<Tab.Screen
			name="Donate "
			component={AccountNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name="account-arrow-right-outline"
						size={size}
						color={color}
					/>
				),
			}}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
