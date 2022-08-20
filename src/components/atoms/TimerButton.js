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
    backgroundColor: "#b592d8",
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 26,
  },
  text: { color: "#fff", fontSize: 16, fontWeight: "600" },
});

export default TimerButton;
