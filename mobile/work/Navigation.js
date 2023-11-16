import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/common/welcome';
import Login from './screens/common/login';
import SignupClient from './screens/client/signupClient';
import HomeScreenClient from './screens/client/homescreenClient';
import AccountClient from './screens/client/accountClient';
import History from './screens/client/history';
import SignupWorker from './screens/worker/signupWorker';
import HomeScreenWorker from './screens/worker/homescreenWorker';
import AccountWorker from './screens/worker/accountWorker';
import Requests from './screens/worker/requests';


const Stack = createStackNavigator();

const Navigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="SignupClient" component={SignupClient} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreenClient" component={HomeScreenClient} options={{headerShown: false}}/>
        <Stack.Screen name="AccountClient" component={AccountClient} options={{headerShown: false}}/>
        <Stack.Screen name="History" component={History} options={{headerShown: false}}/>
        <Stack.Screen name="SignupWorker" component={SignupWorker} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreenWorker" component={HomeScreenWorker} options={{headerShown: false}}/>
        <Stack.Screen name="AccountWorker" component={AccountWorker} options={{headerShown: false}}/>
        <Stack.Screen name="Requests" component={Requests} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;