import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({label, placeholder, onChangeText, value, secureTextEntry}) => {
    const { container, labelStyle, inputStyle } = styles;
    return(
        <View style={container}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput autoCorrect={false}
                       placeholder={placeholder}
                       value={value}
                       onChangeText= {onChangeText}
                       style={inputStyle}
                       secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

const styles = {
    container:{
        height: 40,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 10,
        paddingRight: 5
    },
    inputStyle: {
        fontSize: 18,
        flex: 3,
        paddingLeft: 5,
        paddingRight: 5
    }
}

export { Input };