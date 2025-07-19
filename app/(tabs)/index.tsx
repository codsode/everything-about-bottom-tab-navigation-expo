import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() =>
          router.push({
            pathname: "/profile",
            params: {
              name: "From Home",
            },
          })
        }
        title="Go to Profile"
      />
    </View>
  );
};

export default Home;
