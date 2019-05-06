import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
        };
    }

    onButtonPress = () => {
        this.setState({loading: true});
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess())
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess())
            .catch(this.onLoginFailed())
        })
    };

    onLoginSuccess = () => {
        this.setState({
            loading: false,
            email: '',
            password: ''
        });
    }

    onLoginFailed = () => {
        this.setState({loading: false});
    }

    renderButton = () => {
        if(this.state.loading) {
            return <Spinner />
        }

        return <Button onClick={this.onButtonPress}>
                    Log in
               </Button>
    }

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
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;