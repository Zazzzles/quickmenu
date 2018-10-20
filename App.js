import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import QuickMenu from './src/QuickMenu'

export default class App extends React.Component {
  render() {
    const items = [
      {
        name: "Connections",
        icon: "router-wireless",
      },
      {
          name: "Cooking",
          icon: "stove",
      },
      {
          name: "Food",
          icon: "food",
      },
      {
          name: "Riding",
          icon: "motorbike",
      }
    ]
    return (
      <View style={styles.container}>
        <QuickMenu
          items={items}
          dotColor={'#3E92CC'}
          fabColor={'#3E92CC'}
          iconColor={'#FFF'}
          iconType={'material-community'}
          onItemPressed={this.handlePress}
        />
      </View>
    );
  }

  handlePress = (item) => console.log(item)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
