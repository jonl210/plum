import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  Alert,
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
  const [fastDate, setFastDate] = useState("");

  useEffect(() => {
    setFastingValue();
    checkForFast();
  }, []);

  const timerButtonPressed = () => {
    if (fasting == "false") {
      const fast = dayjs().add(16, "hours");
      storeFast(fast);
      setFastingValue("true");
      setFastDate(fast);
    } else {
      checkIfEndFast();
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

  const storeFast = async (fast) => {
    try {
      await AsyncStorage.setItem("@current_fast", JSON.stringify(fast));
    } catch (error) {}
  };

  const checkIfEndFast = () =>
    Alert.alert("Would you like to end your current fast?", "", [
      {
        text: "No",
        style: "cancel",
      },
      { text: "Yes", onPress: () => endFast() },
    ]);

  const endFast = async () => {
    try {
      await AsyncStorage.setItem("@current_fast", "");
      setFastingValue("false");
      setFastDate("");
    } catch (error) {}
  };

  const checkForFast = async () => {
    try {
      const date = await AsyncStorage.getItem("@current_fast");
      if (date !== null) {
        setFastDate(JSON.parse(date));
      }
    } catch (error) {}
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#29323a" }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ marginBottom: 21 }}>
          <Timer fastDate={fastDate} />
        </View>
        <TimerButton press={timerButtonPressed} fasting={fasting} />
        <TouchableOpacity style={{ marginTop: 18 }}>
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
