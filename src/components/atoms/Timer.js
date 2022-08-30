import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Timer = () => {
  return (
    <View>
      <Text style={styles.fastHour}>16hr</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fastHour: {
    color: "#fff",
    fontSize: 45,
    marginRight: 5,
  },
});

export default Timer;
