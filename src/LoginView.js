import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'

import { Actions } from 'react-native-router-flux'

import firebase, { firebaseAuth } from "./firebase";

const { FacebookAuthProvider } = firebase.auth;


export default class LoginView extends Component {
  state = {
    credential: null
  }

  componentWillMount() {
    this.authenticateUser();
  }

  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      const { accessToken } = data
      const credential = FacebookAuthProvider.credential(accessToken)
      firebaseAuth.signInWithCredential(credential).then((credentials) => {
        Actions.home();
      }, (error) => {
        console.log("Sign in error", error)
      })
    })
  }

  render() {
    return (
      <Image source={require('./background.jpg')} style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a PlatziMusic</Text>
        <Image source={require('./logo.png')} style={styles.logo}/>
        <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={ this.handleLoginFinished }
          onLogoutFinished={() => alert("logout.")}/>
      </Image>
    );
  }

  handleLoginFinished = (error, result) => {
    if (error) {
      console.error(error)
    } else if (result.isCancelled) {
      console.warn("login is cancelled.");
    } else {
      this.authenticateUser()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    backgroundColor: 'transparent',
    color: 'white',
  },
  logo:{
    width: 120,
    height: 120,
    marginBottom: 15,
  },
});
