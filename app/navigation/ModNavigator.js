import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountNavigator from "./AccountNavigator";
import React from "react";
import BloodRequired from "../screens/BloodRequired";
import AskBlood from "../screens/AskBlood";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AccountScreen from "../screens/AccountScreen";
import AccountNavigatorRequest from "./AccountNavigatorRequest";
import ModVerifyNavigator from "./ModVerifyNavigator";
import ModPublishBR from "../screens/ModPublishBR";
import ModCompleteBR from "../screens/ModCompleteBR";
import ModAccountNavigator from "./ModAccountNavigator";

const Tab = createBottomTabNavigator();

const ModNavigator = () => (
	<Tab.Navigator
		initialRouteName="Publish"
		tabBarOptions={{
			activeBackgroundColor: colors.primary,
			activeTintColor: colors.white,
			inactiveBackgroundColor: colors.light,
			inactiveTintColor: colors.black,
		}}
	>
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
		<Tab.Screen
			name="Publish"
			component={ModAccountNavigator}
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
		<Tab.Screen
			name="Verify"
			component={ModVerifyNavigator}
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
		<Tab.Screen
			name="Complete"
			component={ModCompleteBR}
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

export default ModNavigator;
