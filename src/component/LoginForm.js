import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;