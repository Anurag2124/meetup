import { View, Text } from 'react-native'
import React from 'react'
import events from '~/assets/events.json'
import { useLocalSearchParams } from 'expo-router'

export default function event() {
  const {id} = useLocalSearchParams()

  const event = events.find((e) => e.id === id)
  return (
    <View>
      <Text>event id : {id}</Text>
      <Text>event title : {event?.title}</Text>
      <Text>event description : {event?.description}</Text>
    </View>
  )
}