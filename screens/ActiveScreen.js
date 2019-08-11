import React from 'react';
import { View, Text } from 'react-native';

export default function ActiveScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return(
    <View>
      <Text>Screen active</Text>
    </View>
  )
}

ActiveScreen.navigationOptions = {
  title: 'Active',
};
