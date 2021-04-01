import React, {Component} from 'react';

import styles from './style';
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

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    email: '',
    password: '',
    errorMessage: null,
    visible: false,
    passwordvisible: false,
  };
  handleLogin() {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firestore()
          .collection('Users')
          .doc(this.state.email)
          .set({
            emailId: this.state.email,
            status: 'PENDING',
            role: 'User',
            firstTime: false
          })
          .then(() => {
            console.log('User added!');
            this.setState({
              email: (this.state.email = ''),
              password: (this.state.password = ''),
              visible: (this.state.visible = false),
            });
          });
      })
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => {
        alert(error.message);
        this.setState({
          email: (this.state.email = ''),
          password: (this.state.password = ''),
          visible: (this.state.visible = false),
        });
      });
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.signUpScreenContainer}>
            <View style={{marginHorizontal: 45, marginVertical: 10, flex: 1}}>
              <TextInput
                keyboardType="email-address"
                placeholder="Enter Email"
                style={{
                  marginBottom: 15,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  elevation: 10,
                }}
                onFocus={() => this.setState({passwordvisible: true})}
                onChangeText={text => {
                  this.setState({email: text});
                }}
                value={this.state.email}
              />
              <TextInput
                onChangeText={text => {
                  this.setState({password: text});
                }}
                style={{
                  marginBottom: 35,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  elevation: 10,
                }}
                value={this.state.password}
                secureTextEntry={true}
                placeholder="Enter Password"
              />

              <Button
                title="Signup"
                onPress={() => {
                  this.setState({visible: (this.state.visible = true)});

                  setTimeout(() => {
                    if (this.state.email == '' && this.state.password == '') {
                      this.setState({visible: (this.state.visible = false)});
                      Alert.alert('Please enter Email id and Password');
                    } else if (this.state.email == '') {
                      this.setState({visible: (this.state.visible = false)});
                      alert('Please Enter your email id');
                    } else if (this.state.password == '') {
                      this.setState({visible: (this.state.visible = false)});
                      alert('Please Enter your password.');
                    } else {
                      this.handleLogin();
                    }
                  }, 2000);
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
