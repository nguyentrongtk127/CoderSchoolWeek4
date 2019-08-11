import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CompleteScreen() {
  return (
    <View>
      <Text>Complete screen</Text>
    </View>
  );
}

CompleteScreen.navigationOptions = {
  title: 'Complete',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
