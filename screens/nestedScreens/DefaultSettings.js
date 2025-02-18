import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import * as Progress from "react-native-progress";

import data from "../../questions.json";

const DefaultSettingsScreen = ({ navigation }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(data.length);

  const progressQuiz = (currentQuestionIdx + 1) / progress;
  console.log("selectedOption", selectedOption);
  console.log("isCorect", isCorrect);

  const handleNext = () => {
    if (currentQuestionIdx === data.length - 1) {
      navigation.navigate("Score", { score: score });
    } else {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const handleOptionPress = (pressedOption) => {
    const isCorrectAnswer = data[currentQuestionIdx].answer === pressedOption;

    setSelectedOption(pressedOption);
    setIsCorrect(isCorrectAnswer);

    if (isCorrectAnswer) {
      setScore((prevState) => prevState + 10);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Progress.Bar progress={progressQuiz} width={390} height={30} />
          <Text
            style={{
              position: "absolute",
              paddingLeft: 20,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {currentQuestionIdx + 1}/{progress}
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 18,
          marginBottom: 50,
          marginTop: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {data[currentQuestionIdx].question}
      </Text>
      {data[currentQuestionIdx].options.map((option) => (
        <Pressable
          key={option}
          style={{
            borderColor:
              selectedOption === option
                ? isCorrect
                  ? "green"
                  : "red"
                : "purple",

            alignItems: "center",
            borderWidth: 2,
            borderRadius: 8,
            padding: 20,
            marginVertical: 10,
          }}
          onPress={() => handleOptionPress(option)}
          disabled={selectedOption}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}
      <TouchableOpacity
        onPress={handleNext}
        activeOpacity={0.8}
        opacity={0}
        style={styles.nextBtn}
      >
        <Text style={{ color: "#fff" }}>
          {currentQuestionIdx === data.length - 1 ? "FINISH" : "NEXT"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fdf5e6",
    marginHorizontal: 20,
  },
  optionText: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#9370db",
    padding: 20,
    marginVertical: 10,
  },
  nextBtn: {
    padding: 20,
    borderRadius: 8,
    marginTop: 40,
    marginHorizontal: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9370db",
  },
});

export default DefaultSettingsScreen;
