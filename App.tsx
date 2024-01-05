import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {SecondPage} from './SecondPage.tsx';

const fio = {
  name: 'Череповский Максим Викторович',
  group: '224-372',
};

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{fio.name}</Text>
      <Text>{fio.group}</Text>
      <Button
        title="Go to second screen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
