import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultSettingsScreen from "../nestedScreens/DefaultSettings";
import ScoreScreen from "../nestedScreens/ScoreScreen";

const Stack = createStackNavigator();

export const SettingsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="DefaultSettings"
        component={DefaultSettingsScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Score"
        component={ScoreScreen}
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
