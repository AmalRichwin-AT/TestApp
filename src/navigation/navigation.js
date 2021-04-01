import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/login-screen/login';
import Signup from '../screens/signup-screen/Signup';
import Homepage from '../screens/Homepage';
import PendingApproval from '../screens/PendingApproval';
import AdminPage from '../screens/AdminPage';
import Congratulations from '../screens/congratulations';
import FormSubmission from '../screens/FormSubmission';
import ProfileForm from '../screens/ProfileForm';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PendingApproval"
          component={PendingApproval}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AdminPage"
          component={AdminPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Congratulations"
          component={Congratulations}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FormSubmission"
          component={FormSubmission}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileForm"
          component={ProfileForm}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
