import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TopTab = createMaterialTopTabNavigator();

const BanScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Chợ Bán</Text>
    </View>
);

const TrucTiepScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Trực Tiếp</Text>
    </View>
);

const TroChoiScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Trò Chơi</Text>
    </View>
);

const TopTabs = () => {
    return (
        <TopTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === "Chợ Bán") iconName = "cart";
                    else if (route.name === "Trực Tiếp") iconName = "videocam";
                    else if (route.name === "Trò Chơi") iconName = "game-controller";

                    return <Ionicons name={iconName} size={20} color={color} />;
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: { backgroundColor: "#4B0082" },
                tabBarIndicatorStyle: { backgroundColor: "white" },
            })}
        >
            <TopTab.Screen name="Chợ Bán" component={BanScreen} />
            <TopTab.Screen name="Trực Tiếp" component={TrucTiepScreen} />
            <TopTab.Screen name="Trò Chơi" component={TroChoiScreen} />
        </TopTab.Navigator>
    );
};

export default TopTabs;
