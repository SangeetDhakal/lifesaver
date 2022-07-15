import { createStackNavigator } from "@react-navigation/stack";
import BloodRequired from "../screens/BloodRequired";
import AccountScreen from "../screens/AccountScreen";
import MyDonations from "../screens/MyDonations";
import MyRequests from "../screens/MyRequests";
import AskBlood from "../screens/AskBlood";

const Stack = createStackNavigator();

const AccountNavigatorRequest = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Request"
			component={AskBlood}
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

export default AccountNavigatorRequest;
