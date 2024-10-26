import { Stack } from 'expo-router';
import { Text,View ,Image, ScrollView,FlatList} from 'react-native';
import events from '~/assets/events.json'


import EventListItem from '~/components/EventListItem';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <FlatList data={events} renderItem={({item})=><EventListItem event={item}/>}/>          
    </>
  );
}

