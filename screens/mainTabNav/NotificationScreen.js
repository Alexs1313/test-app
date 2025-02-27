// import React from "react";
// import { StyleSheet, View } from "react-native";
// import MapView, { Marker } from "react-native-maps";

// const MapViewExample = () => {
//   const initialRegion = {
//     latitude: 50.489038,
//     longitude: 30.531743,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };

//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} initialRegion={initialRegion}>
//         <Marker
//           coordinate={initialRegion}
//           title="Marker Title"
//           description="Marker Description"
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default MapViewExample;

import React, { useRef, useEffect } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const AnimatedComponent = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const positionAnim = useRef(new Animated.Value(0)).current; // Initial value for position: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true, // Add This line
    }).start();
  }, [fadeAnim]);

  const moveBall = () => {
    Animated.timing(positionAnim, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: true, // Add This line
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim, // Bind opacity to animated value
            transform: [{ translateY: positionAnim }], // Bind translateY to animated value
          },
        ]}
      >
        <View style={styles.ball} />
      </Animated.View>
      <Button title="Move Ball" onPress={moveBall} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fadingContainer: {
    width: 100,
    height: 100,
    backgroundColor: "powderblue",
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
  },
});

export default AnimatedComponent;
