import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const FormSubmission = ({navigation}) => {
  const onLogoutPress = () => {
    auth()
      .signOut()
      .then(() => navigation.navigate('Login'));
    navigation.navigate('Login');
  };
  return (
    <View>
      <Text>Your profile is under review</Text>
      <Button title="Logout" onPress={() => onLogoutPress} />
    </View>
  );
};

export default FormSubmission;
