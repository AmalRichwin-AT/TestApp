import React, {Component} from 'react';

import styles from './login-screen/style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.route.params.email,
      education: '',
      salary: 0,
      gender: '',
    };
  }

  handleProfile() {
    console.warn(this.props.route.params.email);
    firestore()
      .collection(this.state.gender)
      .doc(email)
      .set({
        Education: this.state.education,
        Gender: this.state.gender,
        Salary: this.state.Salary,
      })
      .then(() => {
        this.navigation.navigate('FormSubmission');
        this.setState({
          education: (this.state.email = ''),
          salary: (this.state.password = ''),
          gender: (this.state.visible = false),
        });
      })
      .catch(error => {
        alert(error.message);
      });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <TextInput
                placeholder="Education"
                style={{
                  marginBottom: 15,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  elevation: 10,
                }}
                onChangeText={text => {
                  this.setState({education: text});
                }}
                value={this.state.education}
              />
              <TextInput
                onChangeText={text => {
                  this.setState({salary: text});
                }}
                style={{
                  marginBottom: 35,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  elevation: 10,
                }}
                value={this.state.salary}
                keyboardType="number-pad"
                placeholder="Salary"
              />
              <TextInput
                onChangeText={text => {
                  this.setState({gender: text});
                }}
                style={{
                  marginBottom: 35,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  elevation: 10,
                }}
                value={this.state.gender}
                placeholder="Gender"
              />

              <Button
                title="Send for Approval"
                onPress={() => {
                  this.handleProfile();
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
