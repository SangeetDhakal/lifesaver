import { createStackNavigator } from "@react-navigation/stack";
import BloodRequired from "../screens/BloodRequired";
import AccountScreen from "../screens/AccountScreen";
import MyDonations from "../screens/MyDonations";
import MyRequests from "../screens/MyRequests";
import ModPublishBR from "../screens/ModPublishBR";

const Stack = createStackNavigator();

const ModPublishNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Publish "
			component={ModPublishBR}
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

export default ModPublishNavigator;
