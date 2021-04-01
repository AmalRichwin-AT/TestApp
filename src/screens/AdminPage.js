import React from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const AdminPage = ({ navigation}) => {
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
        backgroundColor: '#1B98F5',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{color: 'white', fontSize: 32, textAlign: 'center'}}>
          Admin Page
        </Text>
        <Button onPress={() => onLogoutPress()} title="Logout" />
      </View>
    </SafeAreaView>
  );
};

export default PendingApproval;
