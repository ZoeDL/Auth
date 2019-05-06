import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './component/LoginForm';
import Header from './component/common/Header';
import { Button, CardSection } from './component/common/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false}
    }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAOTrGPdxpxSpOmsI4kLep8XcaPP4MvcHs",
            authDomain: "auth-f7eba.firebaseapp.com",
            databaseURL: "https://auth-f7eba.firebaseio.com",
            projectId: "auth-f7eba",
            storageBucket: "auth-f7eba.appspot.com",
            messagingSenderId: "317636186005",
            appId: "1:317636186005:web:c11e3c6779237fcc"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("loggedin");
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent = () => {
        if(this.state.loggedIn) {
            return <CardSection>
                        <Button onClick={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
        }

        return <LoginForm />
    }

    render() {
        return (
            <View>
                <Header title='auth' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;