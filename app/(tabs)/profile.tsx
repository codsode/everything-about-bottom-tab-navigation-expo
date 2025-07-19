import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Profile = () => {
  const { name } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{name}</Text>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default Profile;
