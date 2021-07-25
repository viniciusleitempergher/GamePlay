import React, { useState } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds')

    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGuilds()
  }, [])

  return (
    <View style={styles.container}>
      {
        loading ? <Load /> :
          <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Guild
                data={item}
                onPress={() => handleGuildSelected(item)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={() => <ListDivider isCentered />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            contentContainerStyle={{
              paddingBottom: 69,
              paddingTop: 104,
            }}
            style={styles.guilds}
          />
      }
    </View>
  )
}