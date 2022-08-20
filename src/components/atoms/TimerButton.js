import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TimerButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Start Timer</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#d3869b",
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 26,
    shadowColor: "#171717",
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0.5 },
  },
  text: { color: "#fff", fontSize: 17, fontWeight: "600" },
});

export default TimerButton;
