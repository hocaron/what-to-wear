import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "d2b8a2c4ea75891fea1fc4e5a1aabfef";

function RecommendClothes(temp) {
  if (temp >= 28) {
    return 1;
  } else if (23 <= temp && temp < 28) {
    return 2;
  } else if (20 <= temp && temp < 23) {
    return 3;
  } else if (17 <= temp && temp < 20) {
    return 4;
  } else if (12 <= temp && temp < 17) {
    return 5;
  } else if (9 <= temp && temp < 12) {
    return 6;
  } else if (5 <= temp && temp < 9) {
    return 7;
  } else {
    return 8;
  }
}

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestBackgroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("앱을 사용하기 위해 위치 허용을 해주세요");
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, choice } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      if (temp > 0) {
        return (
          <Weather
            temp={Math.round(temp)}
            condition={condition}
            choice={RecommendClothes(temp)}
          />
        );
      } else {
        null;
      }
    }
  }
}
