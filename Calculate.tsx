import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {NativeModules} from 'react-native';

const AwesomeModule = NativeModules.AwesomeModule;

export function Calculate() {
  let buttonProps = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  };

  const [number, onChangeNumber] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');

  let finalNum: number;

  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Enter the value"
          value={number}
          onChangeText={onChangeNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter the value"
          value={number2}
          onChangeText={onChangeNumber2}
          keyboardType="numeric"
        />
        <Pressable
          {...buttonProps}
          onPress={() => {
            multiply(Number(number), Number(number2)).then(r => {
              console.log(r);
              finalNum = r;
              Alert.alert('Your value is ' + finalNum);
            });
          }}>
          <Text style={styles.text}>{'Know value'}</Text>
        </Pressable>
      </SafeAreaView>
    </View>
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

export function multiply(a: number, b: number): Promise<number> {
  return AwesomeModule.multiply(a, b);
}
