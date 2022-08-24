import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getRemainingTimeUntilMsTimestamp } from "../../utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
};

const Timer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     updateRemainingTime(countdownTimestampMs);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, [countdownTimestampMs]);

  const updateRemainingTime = (countdown) => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.number}>{remainingTime.hours}</Text>
      <Text style={styles.number}>{remainingTime.minutes}</Text>
      <Text style={styles.number}>{remainingTime.seconds}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  number: {
    color: "#fff",
    fontSize: 30,
    marginRight: 5,
  },
});

export default Timer;
