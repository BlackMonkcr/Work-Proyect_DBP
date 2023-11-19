import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/client/homescreenClient';
import HistoryScreen from '../screens/client/history';
import FavoritesScreen from '../screens/client/history';
import MessagesScreen from '../screens/client/history';
import ProfileScreen from '../screens/client/accountClient';
import Svg, { Path } from 'react-native-svg';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Home') {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ededed" width={24} height={24}>
                  <Path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <Path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </Svg>
              );
            } else if (route.name === 'Historial') {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ededed" width={24} height={24}>
                  <Path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </Svg>
              );
            } else if (route.name === 'Favoritos') {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ededed" width={24} height={24}>
                  <Path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                </Svg>
              );
            } else if (route.name === 'Mensajes') {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ededed" width={24} height={24}>
                  <Path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                </Svg>
              );
            } else if (route.name === 'Perfil') {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ededed" width={24} height={24}>
                  <Path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </Svg>
              );
            }
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#ededed',
          },
          tabBarStyle: {
            backgroundColor: '#4433E0',
            paddingTop: 8,
            paddingBottom: 5,
            margin: 8,
            borderRadius: 10,
            elevation: 20 ,
            height: '7%',
            shadowColor: '#2F43DD',  // Color del borde desenfocado
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 50,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Inicio',
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favoritos',
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Perfil',
          }}
        />
        <Tab.Screen
          name="Historial"
          component={HistoryScreen}
          options={{
            tabBarLabel: 'Historial',
          }}
        />
        <Tab.Screen
          name="Mensajes"
          component={MessagesScreen}
          options={{
            tabBarLabel: 'Mensajes',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
