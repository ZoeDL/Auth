import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1}
    },
    text: {
        fontSize: 20
    }
});

// const Header = (props) => {
//     const { container, text } = styles;

//     return (
//         <View style={container}>
//             <Text style={text}> { props.title } </Text>
//         </View>
//     );
// };

class Header extends Component {
    render() {
        const { container, text } = styles;
        return (
            <View style={container}>
                <Text style={text}> { this.props.title } </Text>
            </View>
        );
    }
}


export default Header;