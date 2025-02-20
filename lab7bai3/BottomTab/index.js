import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopTabs from "../TopTabs/index";

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
    <View style={{ flex: 1 }}>
        <TopTabs />
    </View>
);

const SavedScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Saved Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile Screen</Text>
    </View>
);

const BottomTabs = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") iconName = focused ? "home" : "home-outline";
                        else if (route.name === "Saved") iconName = focused ? "bookmark" : "bookmark-outline";
                        else if (route.name === "Profile") iconName = focused ? "person" : "person-outline";

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#4B0082",
                    tabBarInactiveTintColor: "#999", // Nhạt hơn để icon rõ hơn
                    tabBarStyle: { backgroundColor: "white", height: 60, borderTopWidth: 0 },
                    tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Saved" component={SavedScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </>
    );
};

export default BottomTabs;
