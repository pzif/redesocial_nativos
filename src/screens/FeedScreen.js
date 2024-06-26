import React from 'react';
import { View, Text, Button } from 'react-native';

const FeedScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Feed</Text>
      <Button title="Criar Post" onPress={() => navigation.navigate('Post')} />
      <Button title="Ver Perfil" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default FeedScreen;
