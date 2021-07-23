
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useContext } from 'react';
import { Image, Text, View } from 'react-native';

import IllustrationImg from '../../assets/illustration.png'
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { AuthContext } from '../../hooks/auth';
import { styles } from './style';

export function Signin() {
  const navigation = useNavigation()

  function handleSignin() {
    navigation.navigate('Home')
  }

  const context = useContext(AuthContext)

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignin}
          />
        </View>
      </View>
    </Background>
  );
}
