import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TimerButton from "../../components/atoms/TimerButton";

const Home = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#29323a" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TimerButton pressed={pressed} setPressed={setPressed} />
        <TouchableOpacity style={{ marginTop: 21 }}>
          <Text style={styles.editFast}>Edit Fast</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  editFast: { fontSize: 16, fontWeight: "600", color: "#fff" },
});

export default Home;
