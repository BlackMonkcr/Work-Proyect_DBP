import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/client/homescreenClient';
import HistoryScreen from '../screens/client/history';
import FavoritesScreen from '../screens/client/history';
import MessagesScreen from '../screens/client/history';
import ProfileScreen from '../screens/client/accountClient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

  const Tab = createBottomTabNavigator();

  const NavBarClient = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
               iconName = 'home';
              } else if (route.name === 'Historial') {
               iconName = 'history';
              } else if (route.name === 'Favoritos') {
               iconName = 'bookmark';
              } else if (route.name === 'Mensajes') {
               iconName = 'message';
              } else if (route.name === 'Perfil') {
               iconName = 'account';
              }

              // Puedes cambiar "MaterialCommunityIcons" al conjunto de iconos que prefieras
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ededed',
            tabBarInactiveTintColor: '#ededed',
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              color: '#ededed',
            },
            tabBarStyle: {
              backgroundColor: '#12229D',
              paddingTop: 8,
              paddingBottom: 3,
              borderRadius: 5,
              shadowColor: 'transparent',
              elevation: 0,
              height: 60,
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

  export default NavBarClient;
