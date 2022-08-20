import { View } from "react-native";
import CountDown from "react-native-countdown-component";

const Timer = () => {
  return (
    <View style={{ marginBottom: 25 }}>
      <CountDown
        digitStyle={{
          backgroundColor: "#fff",
        }}
        timeLabelStyle={{ color: "#fff", fontWeight: "bold" }}
        separatorStyle={{ color: "#fff" }}
        timeLabels={{ h: "hours", m: "minutes", s: "seconds" }}
        size={38}
        timeToShow={["H", "M", "S"]}
        showSeparator
      />
    </View>
  );
};

export default Timer;
