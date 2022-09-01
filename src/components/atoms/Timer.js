import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";

const Timer = ({ fastDate }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.fastHour}>16hr</Text>
      {fastDate !== "" ? (
        <Text style={styles.dateDisplay}>
          {`Your fast will end ${dayjs(fastDate).format("M/D/YYYY")} at ${dayjs(
            fastDate
          ).format("h:mma")}`}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  fastHour: {
    color: "#fff",
    fontSize: 45,
    marginBottom: 10,
  },
  dateDisplay: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Timer;
