import React from 'react';
import { View, Text, Button } from 'react-native';

const ComponentWithCallback = ({ onPress }) => {
  return (
    <View>
      <Text>Это компонент с функцией обратного вызова</Text>
      <Button title="Нажми меня" onPress={onPress} />
    </View>
  );
};

export default ComponentWithCallback;
