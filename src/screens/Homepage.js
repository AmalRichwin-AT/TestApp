import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native';

const Homepage = () => {
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
    </SafeAreaView>
  );
};

export default Homepage;
