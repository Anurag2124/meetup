import { View, Text, Image } from 'react-native'
import React from 'react'
import events from '~/assets/events.json'
import { Stack, useLocalSearchParams } from 'expo-router'
import dayjs from 'dayjs'

export default function event() {
  const {id} = useLocalSearchParams()

  const event = events.find((e) => e.id === id)

  if(!event){
    return <Text>Event not found</Text>
  }
  return (
    <View className='p-6 bg-white flex-1 gap-2'>
      <Stack.Screen options={{title:"Event"}}/>
      <Image source={{uri:event.image}} className='aspect-video w-full rounded-xl'/>
      <Text className='text-3xl font-semibold' numberOfLines={2}>{event.title}</Text>
      <Text className='text-lg font-medium 
      uppercase text-amber-800'>
        {dayjs(event.datetime).format('ddd, D MMM - hh:mm a')}
      </Text>
      <Text className='text-xl' numberOfLines={2}>
        {event.description}
      </Text>
    </View>
  )
}