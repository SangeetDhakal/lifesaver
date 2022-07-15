import { createStackNavigator } from "@react-navigation/stack";
import BloodRequired from "../screens/BloodRequired";
import AccountScreen from "../screens/AccountScreen";
import MyDonations from "../screens/MyDonations";
import MyRequests from "../screens/MyRequests";
import ModVerifyDonations from "../screens/ModVerifyDonations";

const Stack = createStackNavigator();

const AccountNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Verify"
			component={ModVerifyDonations}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="Donate "
			component={BloodRequired}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="AccountScreen"
			component={AccountScreen}
			options={{ headerShown: true }}
		/>
		<Stack.Screen
			name="MyDonations"
			component={MyDonations}
			options={{ headerShown: true }}
		/>
		<Stack.Screen
			name="MyRequests"
			component={MyRequests}
			options={{ headerShown: true }}
		/>
	</Stack.Navigator>
);

export default AccountNavigator;
