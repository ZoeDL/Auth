import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onClick, children }) => {
    const { button, text } = styles;
    return (
        <TouchableOpacity style={button} onPress={onClick}>
            <Text style={text}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    text: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff',
        paddingTop: 5,
        paddingBottom: 5
    }
};

export { Button };