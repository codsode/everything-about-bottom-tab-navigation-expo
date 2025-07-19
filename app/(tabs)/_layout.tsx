// import Ionicons from "@expo/vector-icons/Ionicons";
// import { Tabs } from "expo-router";
// import React from "react";

// const BottomTab = () => {
//   return (
//     <Tabs
//       screenOptions={({ route }) => ({
//         tabBarActiveTintColor: "red",
//         tabBarInactiveTintColor: "gray",
//         // tabBarShowLabel: false,
//         // tabBarActiveBackgroundColor: "skyblue",
//         // tabBarInactiveBackgroundColor: "rgba(0,0,0,0.4)",
//         tabBarStyle: {
//           // height: 190,
//           // paddingTop: 60,
//           // backgroundColor: "red",
//           marginBottom: 50,
//           marginHorizontal: 20,
//           borderRadius: 20,
//           height: 90,
//           paddingTop: 20,
//         },
//         headerStyle: {
//           backgroundColor: "red",
//         },
//         headerTintColor: "white",
//         headerTitleAlign: "center",
//         headerTitleStyle: {
//           fontSize: 22,
//           fontWeight: "bold",
//         },
//         headerShadowVisible: true,
//         headerTransparent: false,
//         tabBarIcon: ({ color, focused, size }) => {
//           let iconName = "";
//           if (route?.name === "index") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route?.name === "profile") {
//             iconName = focused ? "person" : "person-outline";
//           } else if (route?.name === "settings") {
//             iconName = focused ? "settings" : "settings-outline";
//           }
//           return <Ionicons name={iconName as any} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home Screen",
//           headerStyle: {
//             backgroundColor: "blue",
//           },
//           headerTitleAlign: "left",
//           // tabBarBadge: 0,
//           // tabBarBadgeStyle: {
//           //   backgroundColor: "red",
//           // },
//           // tabBarShowLabel: false,
//           tabBarLabel: "Home",
//           // tabBarIcon: ({ color, focused, size }) => {
//           //   return (
//           //     <Ionicons
//           //       name={focused ? "home" : "home-outline"}
//           //       size={size}
//           //       color={color}
//           //     />
//           //   );
//           // },
//         }}
//       />
//       <Tabs.Screen name="profile" options={{ title: "Profile" }} />
//       <Tabs.Screen name="settings" options={{ title: "Settings" }} />
//     </Tabs>
//   );
// };

// export default BottomTab;

import CustomTabBar from "@/component/CustomTabBar";
import { Tabs } from "expo-router";
import React from "react";

const BottomTab = () => {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarLabel: "Home" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", tabBarLabel: "Profile" }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: "Settings", tabBarLabel: "Settings" }}
      />
    </Tabs>
  );
};

export default BottomTab;
