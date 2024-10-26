import React from 'react'
import { Text,View ,Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

interface Event {
  datetime: string;
  title: string;
  location: string;
  image?: string;
}

interface EventListItemProps {
  event: Event;
}

const EventListItem: React.FC<EventListItemProps> = ({event})=> {
  return (
    <View className='p-6 border-b border-slate-200'>
        <View className='flex-row mb-4'>
          <View className='flex-1'>
            <Text className='text-lg font-medium uppercase text-amber-800 mb-1'>{event.datetime}</Text>
            <Text className='text-xl font-semibold mb-0.5' numberOfLines={2}>{event.title}</Text>
            <Text className='text-gray-700'>{event.location}</Text>
          </View>
          <Image source={{ uri: event.image}}
          className='ml-2 aspect-video w-2/5 rounded-xl'
          />
        </View>

        <View className='flex-row justify-between'>
          <Text className='text-gray-600'>16 going</Text>
          <View className='flex-row gap-4'>
            <Feather name="share-2" size={20} color="gray" />
            <Feather name="bookmark" size={20} color="gray" />
          </View>
        </View>
      </View>
  )
}

export default EventListItem