import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import recipes from "../../recipes.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../categories";

const DetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item.ingredients);
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 14,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={28} color="black" />
        </Pressable>

        <AntDesign name="hearto" size={24} color="black" />
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          marginTop: 170,
          backgroundColor: "#fff",
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
            alignItems: "center",
          }}
        >
          <Image
            src={item.url}
            style={{ width: 280, height: 280, borderRadius: "50%" }}
          />
        </View>
        <Text
          style={{
            marginTop: 160,
            fontSize: 20,
            marginBottom: 10,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
        <ScrollView style={{ height: 100 }}>
          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
            {item.directions}
          </Text>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#90ee90",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 8,
              marginBottom: 20,

              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
            }}
          >
            <Text style={{ fontSize: 20 }}>{item.time} mins ⏰</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#dda0dd",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 8,
              marginBottom: 20,

              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
            }}
          >
            <Text style={{ fontSize: 20 }}>{item.difficulty} 🍽️</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#48d1cc",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 8,
              marginBottom: 20,

              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
            }}
          >
            <Text style={{ fontSize: 20 }}>{item.calories} cal🔥</Text>
          </View>
        </View>
        <ScrollView>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
            Ingredients:
          </Text>
          {item.ingredients.map((ingredient) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "red",
                  height: 10,
                  width: 10,
                  borderRadius: "50%",
                  marginRight: 10,
                }}
              ></View>
              <Text>{ingredient}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_PRIMARY,
  },
});

export default DetailsScreen;
