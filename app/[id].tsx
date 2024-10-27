import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import events from '~/assets/events.json'
import { Stack, useLocalSearchParams } from 'expo-router'
import dayjs from 'dayjs'
import { SafeAreaView } from 'react-native-safe-area-context'

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

      <View className='absolute left-0 right-0 bottom-0 p-6 border-t-2 border-slate-300 flex-row justify-between items-center pb-10'>
        <Text className='text-xl font-semibold'>Free</Text>
        <Pressable className='bg-red-400 p-5 px-8 rounded-lg'>
          <Text className='text-white text-lg'>Join and RSVP</Text>
        </Pressable>
    </View>
    </View>
  )
}