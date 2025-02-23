import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';

const UserListScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://192.168.1.100:5000/users');
            setUsers(response.data);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách user:", error);
        }
    };

    const deleteUser = async (id) => {
        console.log('ID cần xóa:', id);
        try {
            await axios.delete(`http://192.168.1.100:5000/users/${id}`);
            Alert.alert('Thành công', 'Xóa tài khoản thành công!');
            fetchUsers(); // Gọi lại API để cập nhật danh sách
        } catch (error) {
            console.error('Lỗi khi xóa user:', error.response ? error.response.data : error.message);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchUsers();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Button title="Tạo tài khoản" onPress={() => navigation.navigate('CreateUser')} />
            <FlatList
                data={users}
                keyExtractor={(item) => item?.id?.toString() || `${Math.random()}`}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { id: item.id })}>
                        <View style={styles.card}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                            <View style={styles.buttonContainer}>
                                <Button
                                    title="Sửa thông tin"
                                    color="blue"
                                    onPress={() => navigation.navigate('EditUser', { user: item })}
                                />
                                <Button
                                    title="Xoá"
                                    color="red"
                                    onPress={() => {
                                        if (item.id) {
                                            Alert.alert('Xác nhận', 'Bạn có chắc muốn xoá người dùng này?', [
                                                { text: 'Huỷ', style: 'cancel' },
                                                { text: 'Xoá', onPress: () => deleteUser(item.id) },
                                            ]);
                                        } else {
                                            console.error('ID không tồn tại:', item);
                                        }
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default UserListScreen;
