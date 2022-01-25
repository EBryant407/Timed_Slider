import React from "react";
import { StyleSheet, View } from "react-native";

import Slider from "../components/Slider";

const SliderScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SliderScreen;
