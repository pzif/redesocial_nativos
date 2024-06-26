import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Feed')} />
      <Button title="Registrar" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;
