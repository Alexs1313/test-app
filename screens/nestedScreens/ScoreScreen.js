import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ScoreScreen = ({ route, navigation }) => {
  const { score } = route.params;
  console.log(score);
  return (
    <View style={styles.container}>
      {score < 10 ? (
        <View style={{ width: 250, height: 250, marginBottom: 50 }}>
          <Image
            style={{
              height: 250,
              marginBottom: 50,
              borderRadius: "50%",
            }}
            source={{
              uri: "https://i2-prod.mirror.co.uk/incoming/article25609261.ece/ALTERNATES/s1200e/0_PUSS-IN-BOOTS.jpg",
            }}
          />
          <Text
            style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
          >
            Oh nooo.Your score is only {score} points
          </Text>
        </View>
      ) : (
        <View style={{ width: 250, marginBottom: 50 }}>
          <Image
            style={{
              height: 250,
              marginBottom: 50,
              borderRadius: "50%",
            }}
            source={{
              uri: "https://i2-prod.mirror.co.uk/incoming/article25609268.ece/ALTERNATES/s338a/0_PUSS-IN-BOOTS.jpg",
            }}
          />
          <Text
            style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
          >
            Congratulations !!! Your score is {score} points
          </Text>
        </View>
      )}
      <Pressable
        onPress={() => navigation.navigate("DefaultSettings")}
        style={{
          padding: 20,
          borderRadius: 8,
          marginTop: 100,
          marginHorizontal: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#9370db",
        }}
      >
        <Text style={{ color: "#fff" }}>PLAY AGAIN</Text>
      </Pressable>
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

export default ScoreScreen;
