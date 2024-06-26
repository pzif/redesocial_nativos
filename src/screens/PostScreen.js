import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PostScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Criar Post</Text>
      <TextInput placeholder="Texto do post" />
      <Button title="Upload de Foto" onPress={() => {}} />
      <Button title="Postar" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
};

export default PostScreen;
