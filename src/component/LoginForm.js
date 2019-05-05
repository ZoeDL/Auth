import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return(
            <Card>
                <CardSection />
                <CardSection />
                <CardSection >
                    <Button>
                        <Text>Log in</Text>
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;