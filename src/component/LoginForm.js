import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onButtonPress = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {alert("Log in Succeed!")})
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert("New user created!")
            })
            .catch(()=> {
                alert("Log in Failed!");
            })
        })
    };

    render() {
        return(
            <Card>
                <CardSection>
                    <Input placeholder='enter your email'
                           value={this.state.email}
                           onChangeText={email => this.setState({email})}
                           label='Email'
                    />
                </CardSection>
                <CardSection>
                    <Input placeholder='enter your password'
                           value={this.state.password}
                           onChangeText={password => this.setState({password})}
                           label='Password'
                           secureTextEntry={true}
                    />
                </CardSection>
                <Spinner />
                <CardSection>
                    <Button onClick={this.onButtonPress}>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;