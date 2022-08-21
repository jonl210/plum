import CountDown from "react-native-countdown-component";

const Timer = () => {
  return (
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
  );
};

export default Timer;
