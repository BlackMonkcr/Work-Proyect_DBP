import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenWorker from '../screens/worker/homescreenWorker';
import AccountWorker from '../screens/worker/accountWorker';
import Requests from '../screens/worker/requests';
import Plans from '../screens/worker/plans'
import { FontAwesome5,Ionicons,MaterialIcons,AntDesign } from '@expo/vector-icons';
import PlansWorker from '../screens/worker/plans';

const Tab = createBottomTabNavigator();

const NavBarWorker = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Home') {
              return (
                <FontAwesome5 name="home" size={25} color="#ededed" />
              );
            } else if (route.name === 'Profile') {
              return (
                <Ionicons name="ios-person-circle-sharp" size={30} color="#ededed" />
              );
            } else if (route.name === 'Requests') {
              return (
                <AntDesign name="inbox" size={28} color="#ededed" />
              );
            } else if (route.name === 'Plans') {
              return (
                <MaterialIcons name="attach-money" size={28} color="#ededed" />
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
            marginBottom:20,
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
          component={HomeScreenWorker}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AccountWorker}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
        <Tab.Screen
          name="Requests"
          component={Requests}
          options={{
            tabBarLabel: 'Requests',
          }}
        />
        <Tab.Screen
          name="Plans"
          component={PlansWorker}
          options={{
            tabBarLabel: 'Plans',
          }}
        />
      </Tab.Navigator>
  );
};


export default NavBarWorker;