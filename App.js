import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import ModNavigator from "./app/navigation/ModNavigator";

export default function App() {
	const [user, setUser] = useState();
	const [mod, isMod] = useState();

	const [isReady, setIsReady] = useState(false);

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (user) setUser(user);
	};

	if (!isReady)
		return (
			<AppLoading
				startAsync={restoreUser}
				onFinish={() => setIsReady(true)}
				onError={console.warn}
			/>
		);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<NavigationContainer theme={navigationTheme}>
				{user && user["isMod"] ? (
					<ModNavigator />
				) : user ? (
					<AppNavigator />
				) : (
					<AuthNavigator />
				)}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
