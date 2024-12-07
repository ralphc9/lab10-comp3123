import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

export default function HomeScreen({ navigation }) {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const mockDecodedToken = {
    name: 'User',
    email: 'user@example.com',
  };

  const decodedToken = token ? mockDecodedToken : null;

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      {decodedToken ? (
        <Text>Welcome, {decodedToken.name || 'User'}!</Text>
      ) : (
        <Text>No valid token.</Text>
      )}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
