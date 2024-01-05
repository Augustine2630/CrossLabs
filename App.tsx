import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {SecondPage} from './SecondPage.tsx';
import {Provider} from 'react-redux';
import store from './store/Store.tsx';
import {useSelector, useDispatch} from 'react-redux';
import Spacer from './Spacer.tsx';
const fio = {
  name: 'Череповский Максим Викторович',
  group: '224-372',
};

function HomeScreen({navigation}) {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Total clicks ' + count}</Text>
      <Spacer size={40} />
      <Text>{fio.name}</Text>
      <Text>{fio.group}</Text>
      <Button
        title="Go to second screen"
        onPress={() => {
          navigation.navigate('Second');
          dispatch({type: 'INCREMENT'});
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
