import { Text, View } from "react-native";
import { CommunityStyles } from "./CommunityScreenStyles";

export default function CommunityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={CommunityStyles.header}>Community!</Text>
    </View>
  );
}
