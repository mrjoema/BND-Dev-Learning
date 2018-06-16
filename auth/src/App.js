import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged( (user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={ () => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Aunthentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App;