import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

export function Signin() {
  const [text, setText] = useState("...")

  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  );
}
