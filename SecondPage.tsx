import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Spacer from './Spacer.tsx';
import StatefulComponent from './Components/StatefulComponent.tsx';

export function SecondPage() {
  const [number, onChangeNumber] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  var buttonProps = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: isEnabled ? 'red' : 'blue',
  };
  return (
    <SafeAreaView>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter the value"
          keyboardType="numeric"
        />
        <Pressable
          {...buttonProps}
          onPress={() => {
            Alert.alert('Your value is ' + number);
          }}>
          <Text style={styles.text}>{'Know value'}</Text>
        </Pressable>
      </SafeAreaView>
      <Spacer size={10} />
      <SafeAreaView style={styles.container}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            toggleSwitch();
          }}
          value={isEnabled}
        />
        <Spacer size={20} />
        <Text style={{fontSize: 26, fontWeight: 'bold', letterSpacing: 0.25}}>
          {'Change button color'}
        </Text>
      </SafeAreaView>
      <Spacer size={20} />
      <SafeAreaView>
        <StatefulComponent />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 10,
  },
});
