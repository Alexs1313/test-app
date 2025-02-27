import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultHome from "../nestedScreens/DefaultHome";
import DetailsScreen from "../nestedScreens/DetailsScreen";

const Stack = createStackNavigator();

export const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="DefaultHome"
        component={DefaultHome}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdf5e6",
  },
});
