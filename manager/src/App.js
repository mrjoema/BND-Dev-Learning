import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyC1Q7v8GTy-YIae88hR36CEyIKjM2FLQ_8",
            authDomain: "manager-f4d0e.firebaseapp.com",
            databaseURL: "https://manager-f4d0e.firebaseio.com",
            projectId: "manager-f4d0e",
            storageBucket: "manager-f4d0e.appspot.com",
            messagingSenderId: "669226792510"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style = {{marginTop: 20}}>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;