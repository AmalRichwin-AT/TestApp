import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const Homepage = ({navigation}) => {
  const onLogoutPress = () => {
    auth()
      .signOut()
      .then(() => navigation.navigate('Login'));
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#2827CC',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{color: 'white', fontSize: 32, textAlign: 'center'}}>
          HomePage
        </Text>
      </View>
      <View style={{paddingTop: 40}}>
        <Button onPress={() => onLogoutPress()} title="Logout" />
      </View>
    </SafeAreaView>
  );
};

export default Homepage;
