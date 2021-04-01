import React from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text} from 'react-native';

const PendingApproval = () => {
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
          Your Profile is Pending Approval
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PendingApproval;
