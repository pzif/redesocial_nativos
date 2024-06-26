import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Perfil</Text>
      <Button title="Editar Perfil" onPress={() => {}} />
      <Button title="Voltar ao Feed" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
};

export default ProfileScreen;
