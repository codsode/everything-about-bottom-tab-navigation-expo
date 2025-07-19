import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View
      style={{
        height: 90,
        backgroundColor: "rgba(0,0,0,0.2)",
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
      }}
    >
      {state?.routes?.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;

        const isFocused = state?.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route?.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: isFocused ? "red" : "gray",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            disabled={isFocused}
            onPress={onPress}
          >
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
