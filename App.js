import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import SliderScreen from "./src/screens/SliderScreen";
import SummaryScreen from "./src/screens/SummaryScreen";

const Tab = createBottomTabNavigator();
const SLIDER_SCREEN = "Slider";
const SUMMARY_SCREEN = "Summary";

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === SLIDER_SCREEN) {
              iconName = focused ? "albums" : "albums-outline";
            } else if (route.name === SUMMARY_SCREEN) {
              iconName = focused ? "list" : "list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "green",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name={SLIDER_SCREEN} component={SliderScreen} />
        <Tab.Screen name={SUMMARY_SCREEN} component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
