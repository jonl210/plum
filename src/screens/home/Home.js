import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import TimerButton from "../../components/atoms/TimerButton";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TimerButton />
      <TouchableOpacity style={{ marginTop: 23 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>Change timer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default Home;
