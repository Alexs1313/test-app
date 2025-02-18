import { Button, StyleSheet, Text, View } from "react-native";
import { Switch } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-end" }}>
        <Button
          title="go to map"
          onPress={() => navigation.navigate("MapScreen")}
        />
      </View>
    </View>
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

export default HomeScreen;
