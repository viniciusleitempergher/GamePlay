import React from 'react'
import { Image } from 'react-native'

import { styles } from './style'

export function GuildIcon() {
  const uri = ""
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    >

    </Image>
  )
}