import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TimerButton = ({ pressed, setPressed }) => {
  return (
    <TouchableOpacity
      style={[styles.button, pressed ? styles.pressed : null]}
      onPress={() => setPressed(!pressed)}
    >
      <Text style={styles.text}>
        {pressed ? "Your fasting!" : "Start timer"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#d3869b",
    paddingHorizontal: 34,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#d3869b",
    borderRadius: 30,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
  },
  pressed: {
    backgroundColor: "#29323a",
  },
  text: { color: "#fff", fontSize: 17, fontWeight: "600" },
});

export default TimerButton;
