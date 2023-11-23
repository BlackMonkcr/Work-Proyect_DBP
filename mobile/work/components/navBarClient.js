import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/client/homescreenClient';
import HistoryScreen from '../screens/client/history';
import FavoritesScreen from '../screens/client/favorites';
import MessagesScreen from '../screens/client/messages';
import ProfileScreen from '../screens/client/accountClient';
import Svg, { Path } from 'react-native-svg';
import { FontAwesome5,Ionicons,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const NavBarClient = ({route}) => {
  const { username } = route.params;
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Home') {
              return (
                <FontAwesome5 name="home" size={25} color="#ededed" />
              );
            } else if (route.name === 'History') {
              return (
                <MaterialCommunityIcons name="history" size={33} color="#ededed" />
              );
            } else if (route.name === 'Favorites') {
              return (
                <MaterialIcons name="favorite" size={30} color="#ededed" />
              );
            } else if (route.name === 'Messages') {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ededed" width={28} height={28}>
                  <Path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                </Svg>
              );
            } else if (route.name === 'Profile') {
              return (
                <Ionicons name="ios-person-circle-sharp" size={35} color="#ededed" />
              );
            }
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#ededed',
          },
          tabBarStyle: {
            backgroundColor: '#3a66ed',
            paddingTop: 8,
            paddingBottom: 5,
            marginBottom:20,
            margin: 8,
            borderRadius: 10,
            elevation: 20 ,
            height: '8%',
            shadowColor: '#2F43DD',  // Color del borde desenfocado
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 50,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
          }}
        >
          {() => <HomeScreen username={username} />}
        </Tab.Screen>

        <Tab.Screen
          name="Favorites"
          options={{
            tabBarLabel: 'Favorites',
          }}
        >
          {() => <FavoritesScreen username={username}/>}
        </Tab.Screen>

        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: 'Profile',
          }}
        >
          {() => <ProfileScreen username={username}/>}
        </Tab.Screen>

        <Tab.Screen
          name="History"
          options={{
            tabBarLabel: 'History',
          }}
        >
          {() => <HistoryScreen username={username}/>}
        </Tab.Screen>

        <Tab.Screen
          name="Messages"
          options={{
            tabBarLabel: 'Messages',
          }}
        >
          {() => <MessagesScreen username={username}/>}
        </Tab.Screen>
      </Tab.Navigator>
  );
};


export default NavBarClient;