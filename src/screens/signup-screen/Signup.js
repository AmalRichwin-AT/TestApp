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

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.signUpScreenContainer}>
            <View style={styles.signUpFormView}>
              <Text style={styles.logoText}>Test App</Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.signUpFormTextInput}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.signUpFormTextInput}
                secureTextEntry={true}
              />
              <Button
                buttonStyle={styles.SignUpButton}
                onPress={() => this.onSignUpPress()}
                title="SignUp"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onSignUpPress() {}
}
