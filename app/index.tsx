import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Edit app/index.tsx to edit this screen.{" "}
        {process.env.EXPO_PUBLIC_API_URL}
      </Text>
    </View>
  );
}
