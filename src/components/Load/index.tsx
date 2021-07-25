import React from 'react';

import { ActivityIndicator, View } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './style';

export function Load(){
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}
      />
    </View>
  );
}