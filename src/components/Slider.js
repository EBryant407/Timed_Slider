import React, { useRef, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native";

import AppButton from "./AppButton";

const width = Dimensions.get("window").width;

const Slider = () => {
  const flatListRef = useRef();
  const counter = useRef(0);
  const intervalTime = 5000;
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPage();
    }, intervalTime);
    return () => clearInterval(interval);
  });

  const goToPrevPage = () => {
    if (counter.current <= 0) {
      counter.current = data.length - 1;
    } else {
      counter.current--;
    }

    flatListRef.current.scrollToIndex({
      animated: true,
      index: counter.current,
    });
  };

  const goToNextPage = () => {
    if (counter.current >= data.length - 1) {
      counter.current = 0;
    } else {
      counter.current++;
    }

    flatListRef.current.scrollToIndex({
      animated: true,
      index: counter.current,
    });
  };

  return (
    <>
      <View style={styles.sliderStyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <View style={styles.renderItemStyle}>
                <Text style={styles.textStyle}>{item}</Text>
              </View>
            );
          }}
          horizontal
          ref={flatListRef}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton buttonName="Prev" onPress={goToPrevPage} />
        <AppButton buttonName="Next" onPress={goToNextPage} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sliderStyle: { flex: 3 },
  renderItemStyle: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 20,
  },
});

export default Slider;
