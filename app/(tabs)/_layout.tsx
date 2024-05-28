import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen 
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <EvilIcons name="location" size={28} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <Entypo name="chat" size={28} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="stopper"
        options={{
            title: "Stopper",
            tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="stopwatch" color={color} />,
            headerShown: false,
          }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
