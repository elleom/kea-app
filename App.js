import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import Chat from "./screens/Chat";
import Menu from "./screens/Menu";
import Header from "./components/Header";
import Colors from "./consts/colors";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<View>
				<Header />
			</View>

			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Home") {
							iconName = focused
								? "ios-information-circle"
								: "ios-information-circle-outline";
						} else if (route.name === "Discover") {
							iconName = focused ? "ios-list-box" : "ios-list";
						} else if (route.name === "Chat") {
							iconName = focused ? "ios-list-box" : "ios-list";
						} else if (route.name === "Menu") {
							iconName = focused ? "ios-list-box" : "ios-list";
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: "#f8f5f9",
					inactiveTintColor: "#f8f5f9",
					inactiveBackgroundColor: Colors.secondary,
					activeBackgroundColor: Colors.primary,
				}}>
				<Tab.Screen name='Home' component={HomeScreen} />
				<Tab.Screen name='Discover' component={Discover} />
				<Tab.Screen name='Chat' component={Chat} />
				<Tab.Screen name='Menu' component={Menu} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}


const styles = StyleSheet.create({
	
});
