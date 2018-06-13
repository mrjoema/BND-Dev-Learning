import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        // Init the firebase application
        firebase.initializeApp({
            apiKey: "AIzaSyDp1EV3JBkaw-wvToGi7O8MyZlYIsxvnq0",
            authDomain: "react-native-auth-2c512.firebaseapp.com",
            databaseURL: "https://react-native-auth-2c512.firebaseio.com",
            projectId: "react-native-auth-2c512",
            storageBucket: "react-native-auth-2c512.appspot.com",
            messagingSenderId: "646167445571"
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Aunthentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App;