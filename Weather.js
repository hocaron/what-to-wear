import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

const weatherOptions = {
  Thunderstorm: {
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "천둥번개",
    lottie: require("./weather/weather-storm.json"),
  },
  Drizzle: {
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "부슬비",
    lottie: require("./weather/weather-partly-shower.json"),
  },
  Rain: {
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "비",
    lottie: require("./weather/weather-partly-shower.json"),
  },
  Snow: {
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "눈",
    lottie: require("./weather/weather-snow.json"),
  },
  Haze: {
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "안개",
    lottie: require("./weather/weather-mist.json"),
  },
  Mist: {
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "안개",
    lottie: require("./weather/weather-mist.json"),
  },
  Fog: {
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "안개",
    lottie: require("./weather/weather-foggy.json"),
  },
  Clear: {
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "맑음",
    lottie: require("./weather/weather-sunny.json"),
  },
  Clouds: {
    gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
    title: "구름",
    lottie: require("./weather/weather-windy.json"),
  },
};

const clothesOption = {
  1: {
    top: "반팔 민소매",
    bottom: "반바지 원피스",
  },
  2: {
    top: "반팔 얇은 셔츠",
    bottom: "반바지 면바지",
  },
  3: {
    top: "얇은 가디건 긴팔",
    bottom: "면바지 청바지",
  },
  4: {
    top: "얇은 니트 맨투맨",
    bottom: "가디건 청바지",
  },
  5: {
    top: "자켓 가디건 야상",
    bottom: "스타킹 청바지 면바지",
  },
  6: {
    top: "자켓 트렌치코트 야상",
    bottom: "니트 청바지 스타킹",
  },
  7: {
    top: "코트 가죽자켓",
    bottom: "히트텍 니트 레깅스",
  },
  8: {
    top: "롱패딩 두꺼운 코드",
    bottom: "목도리 기모제품",
  },
};

export default function Weather({
  temp,
  temp_min,
  temp_max,
  condition,
  choice,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.vacant}></View>
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.upperContainer}
      >
        <View style={styles.halfContainer}>
          <LottieView
            style={{
              width: 180,
              height: 180,
              marginLeft: 20,
            }}
            source={weatherOptions[condition].lottie}
            autoPlay
            loop
          />
          <View style={styles.halfContainer__columm}>
            <Text style={styles.temp}>{temp}℃</Text>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          </View>
        </View>
        <LottieView
          style={{
            width: 150,
            height: 150,
            marginLeft: -15,
            marginTop: 26,
          }}
          source={require("./person/person-man.json")}
          autoPlay
          loop
        />
      </LinearGradient>
      <Text style={styles.temp_m}>최고온도 {temp_min}℃</Text>
      <Text style={styles.temp_m}>최저온도 {temp_max}℃</Text>
      <View style={styles.halfContainer}>
        <Text style={styles.subtitle}>What to wear?</Text>
      </View>
      <View style={styles.halfContainer__choice}>
        <Text style={styles.subtitle}>{clothesOption[choice].top}</Text>
        <Text style={styles.subtitle}>{clothesOption[choice].bottom}</Text>
      </View>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Haze",
    "Fog",
    "Clear",
    "Clouds",
  ]).isRequired,
  choice: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  vacant: {
    width: 20,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  upperContainer: {
    zIndex: 50,
    width: 350,
    height: 280,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  temp_m: {
    fontSize: 20,
    color: "red",
    top: 190,
    zIndex: 100,
    position: "absolute",
  },
  halfContainer: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  halfContainer__columm: {
    marginTop: 30,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer__choice: {
    flex: 1,
    marginTop: -120,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "100",
  },
  subtitle: {
    color: "black",
    fontSize: 35,
    marginTop: 20,
  },
});
