import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;