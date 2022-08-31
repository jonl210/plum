import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Timer from "../../components/atoms/Timer";
import TimerButton from "../../components/atoms/TimerButton";

const Home = () => {
  const [fasting, setFasting] = useState("");

  useEffect(() => {
    setFastingValue();
  }, []);

  const timerButtonPressed = () => {
    if (fasting == "true") {
      setFastingValue("false");
    } else {
      setFastingValue("true");
    }
  };

  const setFastingValue = async (value) => {
    try {
      if (value) {
        await AsyncStorage.setItem("@is_fasting", value);
        setFasting(value);
      } else {
        const asyncValue = await AsyncStorage.getItem("@is_fasting");
        setFasting(asyncValue);
      }
    } catch (error) {}
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#29323a" }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ marginBottom: 40 }}>
          <Timer />
        </View>
        <TimerButton press={timerButtonPressed} fasting={fasting} />
        <TouchableOpacity style={{ marginTop: 21 }}>
          <Text style={styles.editFast}>Edit Fast</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  editFast: { fontSize: 16, fontWeight: "600", color: "#fff" },
});

export default Home;
