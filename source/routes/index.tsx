import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";

const StackNavigator = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNavigator.Screen name="Home" component={Home} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
