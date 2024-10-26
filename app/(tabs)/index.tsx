import { Stack } from 'expo-router';
import { Text,View ,Image, ScrollView} from 'react-native';
import events from '~/assets/events.json'


import EventListItem from '~/components/EventListItem';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <ScrollView>
        {events.map((event,index)=>(
          <View>
            <EventListItem key={index} event={event}/>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

