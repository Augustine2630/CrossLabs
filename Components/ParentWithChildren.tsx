import React from 'react';
import { View, Text } from 'react-native';

const ComponentWithChildren = ({ children }) => {
  return (
    <View>
      <Text>Это компонент с дочерними элементами</Text>
      {children}
    </View>
  );
};

export default ComponentWithChildren;
