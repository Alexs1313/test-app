import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { categories, colors } from "../../categories";
import { useRef, useState } from "react";
import recipes from "../../recipes.json";

const HomeScreen = ({ navigation }) => {
  const [chooseCategory, setChoosCategory] = useState(null);
  const inputRef = useRef();
  console.log(inputRef);

  const toggleCategory = (category) => {
    if (chooseCategory === category) {
      setChoosCategory(null);
    } else {
      console.log(category);
      setChoosCategory(category);
    }
  };

  return (
    <SafeAreaView style={styles.header}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1, fontSize: 20 }}>Hi,There</Text>
        <MaterialIcons name="notifications-none" size={26} color="#ff7f50" />
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          paddingVertical: 16,
          borderRadius: 8,
          paddingHorizontal: 16,
          marginVertical: 24,

          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 7,
        }}
      >
        <Ionicons name="search" size={24} color="#ff7f50" />
        <TextInput
          placeholder="enter your fav recipe"
          style={{ paddingLeft: 8, fontSize: 16, color: "#777" }}
        ></TextInput>
      </View>
      <View>
        <Text style={{ fontSize: 24, fontWeight: " bold" }}>Categories</Text>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, idx) => (
            <TouchableOpacity
              onPress={() => toggleCategory(category)}
              key={category.id}
              style={{
                backgroundColor:
                  chooseCategory === category
                    ? colors.COLOR_PRIMARY
                    : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                padding: 16,
                marginVertical: 24,

                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
              }}
            >
              <Text
                style={{
                  color:
                    chooseCategory === category
                      ? colors.COLOR_LIGHT
                      : colors.COLOR_DARK,
                }}
              >
                {category.category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>
        <Text style={{ fontSize: 24, fontWeight: " bold" }}>Recipes</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={recipes}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("Details", { item })}
              style={{
                backgroundColor: colors.COLOR_LIGHT,
                borderRadius: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                alignItems: "center",
                marginVertical: 16,
                paddingHorizontal: 12,
                paddingVertical: 26,
              }}
            >
              <Image
                src={item.url}
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 30,
                  marginBottom: 10,
                }}
              />
              <Text>{item.title}</Text>
            </Pressable>
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf5e6",
  },
  header: {
    marginHorizontal: 20,
    flex: 1,
  },
});

export default HomeScreen;
