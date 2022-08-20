import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home/Home";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: "plum" }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
