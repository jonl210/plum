import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TimerButton = ({ press, fasting }) => {
  return (
    <TouchableOpacity
      style={[styles.button, fasting == "true" ? styles.fasting : null]}
      onPress={() => press()}
    >
      <Text style={styles.text}>
        {fasting == "true" ? "You're Fasting!" : "Start Fast"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#d3869b",
    paddingHorizontal: 45,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#d3869b",
    borderRadius: 30,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
  },
  fasting: {
    backgroundColor: "#29323a",
    paddingHorizontal: 27,
  },
  text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default TimerButton;
