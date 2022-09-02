import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";

const Timer = ({ fastDate }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.fast}>16:8</Text>
      {fastDate !== "" ? (
        <Text style={styles.dateTimeWrapper}>
          <Text style={styles.text}>Fast ends: </Text>
          <Text style={styles.dateTime}>
            {dayjs(fastDate).format("M/D/YYYY")}
          </Text>
          <Text style={styles.text}> at </Text>
          <Text style={styles.dateTime}>{dayjs(fastDate).format("h:mma")}</Text>
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  fast: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "500",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  dateTimeWrapper: {
    marginTop: 10,
    marginBottom: 5,
  },
  dateTime: {
    color: "#869bd3",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Timer;
