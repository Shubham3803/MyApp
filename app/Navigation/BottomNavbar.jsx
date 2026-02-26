import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Appointment from '../Screens/Appointment';
import Notification from '../Screens/Notification';
import Account from '../Screens/Account';

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // ICON SETUP
        tabBarIcon: ({ color }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Appointment':
              iconName = 'calendar-outline';
              break;
            case 'Notification':
              iconName = 'chatbubble-outline';
              break;
            case 'Account':
              iconName = 'person-outline';
              break;
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },

        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#cbd5e1',

        // NAVBAR DESIGN
        tabBarStyle: {
          backgroundColor: '#2563EB',
          height: 65,
          borderRadius: 20,
          position: 'absolute',
          marginHorizontal: 12,
          marginBottom: 20,
          paddingTop: 12,
          paddingBottom: 12,
          elevation: 8,
        },

        // TAB ITEM ALIGNMENT
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        // ACTIVE TAB BACKGROUND
        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            style={[
              {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 8,
                borderRadius: 12,
              },
              props.accessibilityState?.selected && {
                backgroundColor: '#2563EB',
                marginHorizontal: 6,
              },
            ]}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomNavBar;
