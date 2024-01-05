import React, {Component} from 'react';
import {View, Text, Button, Pressable, Alert} from 'react-native';

class StatefulComponent extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <View>
        <Text>Это stateful компонент</Text>
        <Text>Count: {this.state.count}</Text>
        {/*<Button title="Increase Count" onPress={this.incrementCount} />*/}
        <Pressable
          style={{justifyContent: 'flex-end'}}
          onPress={this.incrementCount}>
          <Text>{'Increase'}</Text>
        </Pressable>
      </View>
    );
  }
}

export default StatefulComponent;
