import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Loading() {
  return (
    <LinearGradient
      colors={["#2980b9", "#6dd5fa", "#ffffff"]}
      style={styles.upperContainer}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Getting the weather</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
