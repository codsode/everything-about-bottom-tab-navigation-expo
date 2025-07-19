# Complete Guide to Bottom Tabs with Expo Router

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [File Structure & Routing](#file-structure--routing)
3. [Basic Tab Implementation](#basic-tab-implementation)
4. [Tab Configuration](#tab-configuration)
5. [Icons and Styling](#icons-and-styling)
6. [Navigation Between Tabs](#navigation-between-tabs)
7. [Nested Routes in Tabs](#nested-routes-in-tabs)
8. [Dynamic Routes](#dynamic-routes)
9. [Layout Components](#layout-components)
10. [Advanced Features](#advanced-features)
11. [Best Practices](#best-practices)
12. [Common Issues & Solutions](#common-issues--solutions)

## Installation & Setup

### 1. Create New Expo Project with Router

```bash
# Create new project with Expo Router template
npx create-expo-app@latest MyApp --template tabs

# OR upgrade existing project
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

### 2. Configure app.json/app.config.js

```json
{
  "expo": {
    "name": "My App",
    "slug": "my-app",
    "scheme": "myapp",
    "web": {
      "bundler": "metro"
    },
    "plugins": ["expo-router"]
  }
}
```

### 3. Update package.json

```json
{
  "main": "expo-router/entry"
}
```

### 4. Create Entry Point

Create `app/_layout.tsx` (or `.js`):

```typescript
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
```

## File Structure & Routing

### 1. Basic Tab Structure

```
app/
├── _layout.tsx          # Root layout
├── (tabs)/              # Tab group
│   ├── _layout.tsx      # Tab layout configuration
│   ├── index.tsx        # Home tab (/)
│   ├── explore.tsx      # Explore tab (/explore)
│   ├── profile.tsx      # Profile tab (/profile)
│   └── settings.tsx     # Settings tab (/settings)
├── modal.tsx            # Modal screen
└── +not-found.tsx       # 404 screen
```

### 2. File-Based Routing Rules

- `(tabs)/` - Group routes without affecting URL structure
- `index.tsx` - Default route for a directory
- `[id].tsx` - Dynamic route segment
- `+not-found.tsx` - 404 fallback
- `_layout.tsx` - Layout component for nested routes

## Basic Tab Implementation

### 1. Tab Layout Configuration

Create `app/(tabs)/_layout.tsx`:

```typescript
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#f8f9fa",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

### 2. Tab Screen Components

Create `app/(tabs)/index.tsx` (Home):

```typescript
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text>Welcome to your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
```

Create `app/(tabs)/explore.tsx`:

```typescript
import { View, Text, StyleSheet } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Screen</Text>
      <Text>Discover new content here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
```

Create `app/(tabs)/profile.tsx`:

```typescript
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text>Your profile information</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
```

## Tab Configuration

### 1. Advanced Tab Options

```typescript
// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e1e1e1",
          height: 84,
          paddingBottom: 20,
          paddingTop: 8,
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: "#007AFF",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarBadge: 3, // Shows notification badge
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerTitle: "Discover", // Different header title
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
          href: null, // Hide from tab bar (accessible programmatically)
        }}
      />
    </Tabs>
  );
}
```

### 2. Conditional Tab Display

```typescript
import { useAuth } from "../context/AuthContext";

export default function TabLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />

      {/* Show different tabs based on auth state */}
      {isLoggedIn ? (
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      ) : (
        <Tabs.Screen
          name="login"
          options={{
            title: "Login",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in" size={size} color={color} />
            ),
          }}
        />
      )}
    </Tabs>
  );
}
```

## Icons and Styling

### 1. Dynamic Icons Based on Focus State

```typescript
function TabBarIcon({ name, focused, color, size }) {
  const iconName = focused ? name : `${name}-outline`;
  return <Ionicons name={iconName} size={size} color={color} />;
}

// Usage in tab configuration
<Tabs.Screen
  name="index"
  options={{
    title: "Home",
    tabBarIcon: ({ color, size, focused }) => (
      <TabBarIcon name="home" focused={focused} color={color} size={size} />
    ),
  }}
/>;
```

### 2. Custom Icon Components

```typescript
import { Image, View } from "react-native";

function CustomTabIcon({ source, focused, tintColor }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={source}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? tintColor : "#8E8E93",
        }}
      />
    </View>
  );
}

// Usage
<Tabs.Screen
  name="special"
  options={{
    title: "Special",
    tabBarIcon: ({ focused }) => (
      <CustomTabIcon
        source={require("../../assets/special-icon.png")}
        focused={focused}
        tintColor="#007AFF"
      />
    ),
  }}
/>;
```

### 3. Custom Tab Bar Styling

```typescript
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 8,
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowColor: "black",
          shadowOffset: { height: -2, width: 0 },
          height: 88,
          paddingBottom: 20,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
      }}
    >
      {/* Tabs */}
    </Tabs>
  );
}
```

## Navigation Between Tabs

### 1. Using router.push() and router.replace()

```typescript
import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  const navigateToProfile = () => {
    router.push("/(tabs)/profile");
  };

  const navigateToExplore = () => {
    router.replace("/(tabs)/explore");
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable onPress={navigateToProfile}>
        <Text>Go to Profile</Text>
      </Pressable>
      <Pressable onPress={navigateToExplore}>
        <Text>Go to Explore</Text>
      </Pressable>
    </View>
  );
}
```

### 2. Using Link Component

```typescript
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="/(tabs)/profile">
        <Text>Go to Profile</Text>
      </Link>
      <Link href="/(tabs)/explore" replace>
        <Text>Replace with Explore</Text>
      </Link>
    </View>
  );
}
```

### 3. Navigation with Parameters

```typescript
import { router } from "expo-router";

// Navigate with params
const navigateWithParams = () => {
  router.push({
    pathname: "/(tabs)/profile",
    params: { userId: "123", tab: "settings" },
  });
};

// Or using query string
const navigateWithQuery = () => {
  router.push("/(tabs)/profile?userId=123&tab=settings");
};
```

## Nested Routes in Tabs

### 1. Stack Navigation Within Tabs

```
app/
├── (tabs)/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── explore/
│   │   ├── _layout.tsx      # Stack layout for explore tab
│   │   ├── index.tsx        # Main explore screen
│   │   ├── [id].tsx         # Explore detail screen
│   │   └── search.tsx       # Search screen
│   └── profile/
│       ├── _layout.tsx      # Stack layout for profile tab
│       ├── index.tsx        # Main profile screen
│       ├── edit.tsx         # Edit profile screen
│       └── settings.tsx     # Profile settings screen
```

### 2. Explore Tab with Stack Navigation

Create `app/(tabs)/explore/_layout.tsx`:

```typescript
import { Stack } from "expo-router";

export default function ExploreLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Explore",
          headerShown: false, // Hide if parent tab has header
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Details",
          presentation: "card",
        }}
      />
      <Stack.Screen
        name="search"
        options={{
          title: "Search",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
```

Create `app/(tabs)/explore/index.tsx`:

```typescript
import { View, Text, Pressable, FlatList } from "react-native";
import { router } from "expo-router";

const items = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
];

export default function ExploreScreen() {
  const navigateToDetail = (id: string) => {
    router.push(`/(tabs)/explore/${id}`);
  };

  const navigateToSearch = () => {
    router.push("/(tabs)/explore/search");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Explore</Text>

      <Pressable
        onPress={navigateToSearch}
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Search</Text>
      </Pressable>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigateToDetail(item.id)}
            style={{
              padding: 15,
              backgroundColor: "#f0f0f0",
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <Text>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
```

Create `app/(tabs)/explore/[id].tsx`:

```typescript
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ExploreDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Detail Screen</Text>
      <Text>Item ID: {id}</Text>
    </View>
  );
}
```

## Dynamic Routes

### 1. Dynamic Tab Content Based on Params

```typescript
// app/(tabs)/profile/[userId].tsx
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function UserProfileScreen() {
  const { userId } = useLocalSearchParams();

  return (
    <View>
      <Text>User Profile: {userId}</Text>
    </View>
  );
}
```

### 2. Catch-All Routes

```typescript
// app/(tabs)/explore/[...slug].tsx
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CatchAllScreen() {
  const { slug } = useLocalSearchParams();

  return (
    <View>
      <Text>Caught route: {Array.isArray(slug) ? slug.join("/") : slug}</Text>
    </View>
  );
}
```

### 3. Optional Catch-All

```typescript
// app/(tabs)/category/[[...category]].tsx
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();

  // Handles both /category and /category/subcategory/item
  return (
    <View>
      <Text>
        Category:{" "}
        {category
          ? Array.isArray(category)
            ? category.join(" > ")
            : category
          : "All"}
      </Text>
    </View>
  );
}
```

## Layout Components

### 1. Shared Layout with Header

Create `app/(tabs)/_layout.tsx` with shared header:

```typescript
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* Tab screens */}
      </Tabs>
    </SafeAreaProvider>
  );
}
```

### 2. Custom Header Component

```typescript
// components/CustomHeader.tsx
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export function CustomHeader({ title, showBack = false }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#007AFF",
      }}
    >
      {showBack && (
        <Pressable onPress={() => router.back()} style={{ marginRight: 16 }}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
      )}
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
    </View>
  );
}

// Usage in screen
import { CustomHeader } from "../../../components/CustomHeader";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Profile" />
      {/* Screen content */}
    </View>
  );
}
```

## Advanced Features

### 1. Tab Bar Visibility Control

```typescript
// Hide tab bar on specific screens
// app/(tabs)/profile/edit.tsx
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { router } from "expo-router";

export default function EditProfileScreen() {
  // Hide tabs when screen is focused
  useFocusEffect(
    useCallback(() => {
      // This would require custom implementation
      // Expo Router doesn't have direct tabBar visibility control
      return () => {
        // Cleanup when screen loses focus
      };
    }, [])
  );

  return (
    <View>
      <Text>Edit Profile</Text>
    </View>
  );
}
```

### 2. Deep Linking Configuration

```typescript
// app.config.js
export default {
  expo: {
    scheme: "myapp",
    web: {
      linking: {
        prefixes: ["myapp://", "https://myapp.com"],
        config: {
          screens: {
            "(tabs)": {
              screens: {
                index: "",
                explore: "explore",
                profile: "profile",
              },
            },
          },
        },
      },
    },
  },
};
```

### 3. Global State with Context

```typescript
// context/AppContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  user: any;
  setUser: (user: any) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}

// app/_layout.tsx
import { AppProvider } from "./context/AppContext";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}
```

## Best Practices

### 1. File Organization

```
app/
├── _layout.tsx              # Root layout
├── (tabs)/                  # Tab group
│   ├── _layout.tsx         # Tab configuration
│   ├── index.tsx           # Home tab
│   ├── explore/            # Explore tab with stack
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── [id].tsx
│   └── profile/            # Profile tab with stack
│       ├── _layout.tsx
│       ├── index.tsx
│       └── edit.tsx
├── modal.tsx               # Modal screen
├── +not-found.tsx         # 404 page
└── +html.tsx              # Web-specific layout
```

### 2. TypeScript Types

```typescript
// types/navigation.ts
export interface TabParamList {
  index: undefined;
  explore: undefined;
  profile: { userId?: string };
  settings: undefined;
}

// Typed navigation
import { router } from "expo-router";
import type { TabParamList } from "../types/navigation";

const navigateToProfile = (userId?: string) => {
  router.push({
    pathname: "/(tabs)/profile" as any,
    params: { userId },
  });
};
```

### 3. Performance Optimization

```typescript
// Lazy load heavy screens
import { lazy, Suspense } from "react";
import { View, Text } from "react-native";

const LazyExploreScreen = lazy(() => import("./explore"));

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading...</Text>
    </View>
  );
}

export default function ExploreWrapper() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LazyExploreScreen />
    </Suspense>
  );
}
```

### 4. Environment-Specific Configuration

```typescript
// app/(tabs)/_layout.tsx
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === "ios" ? 88 : 68,
          paddingBottom: Platform.OS === "ios" ? 20 : 8,
        },
      }}
    >
      {/* Tabs */}
    </Tabs>
  );
}
```

## Common Issues & Solutions

### 1. Tab Bar Not Showing

**Issue**: Tab bar doesn't appear or is hidden.

**Solution**:

```typescript
// Check if href is set to null
<Tabs.Screen
  name="hidden"
  options={{
    href: null, // This hides the tab
  }}
/>

// Remove href: null to show the tab
<Tabs.Screen
  name="visible"
  options={{
    title: 'Visible Tab',
  }}
/>
```

### 2. Navigation Not Working

**Issue**: Navigation between tabs fails.

**Solutions**:

```typescript
// Correct path format
router.push("/(tabs)/profile"); // ✅ Correct
router.push("/tabs/profile"); // ❌ Wrong
router.push("profile"); // ❌ Wrong (relative)

// For nested routes
router.push("/(tabs)/explore/123"); // ✅ Correct
```

### 3. Icons Not Displaying

**Issue**: Tab icons don't show up.

**Solution**:

```bash
# Make sure vector icons are installed
npx expo install @expo/vector-icons

# Check icon name is valid
<Ionicons name="home" /> // ✅ Valid
<Ionicons name="invalid-name" /> // ❌ Won't display
```

### 4. TypeScript Errors

**Issue**: TypeScript errors with routing.

**Solution**:

```typescript
// Create types for your routes
declare global {
  namespace ReactNavigation {
    interface RootParamList {
      "(tabs)": undefined;
      modal: undefined;
    }
  }
}
```

### 5. Web Compatibility Issues

**Issue**: App doesn't work properly on web.

**Solution**:

```typescript
// app.config.js - Configure web bundler
export default {
  web: {
    bundler: "metro", // Use metro for consistency
  },
};

// Use platform-specific code
import { Platform } from "react-native";

const webSpecificStyle = Platform.OS === "web" ? { cursor: "pointer" } : {};
```

This guide covers everything you need to know about implementing bottom tabs using Expo Router's file-based routing system. The approach is more modern and follows React/Next.js conventions, making it intuitive for web developers transitioning to mobile development.
