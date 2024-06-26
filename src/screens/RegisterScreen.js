import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Registrar</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />
      <TextInput placeholder="Nome de usuário" />
      <Button title="Registrar" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;
