import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

export default function LoginScreen({ navigation }) {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(token));
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Enter JWT Token"
        value={token}
        onChangeText={setToken}
        style={{ borderWidth: 1, margin: 10, padding: 5 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
