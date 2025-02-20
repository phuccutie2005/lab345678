import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const Screen3 = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");

    const sendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { id: messages.length.toString(), text: inputText }]);
            setInputText("");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.messageBubble}>
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Nhập tin nhắn..."
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendText}>Gửi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f0f0f0",
    },
    messageBubble: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 8,
        marginBottom: 5,
        alignSelf: "flex-start",
    },
    messageText: {
        color: "#fff",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    sendText: {
        color: "#fff",
        fontWeight: "bold",
    },
});


export default Screen3;
