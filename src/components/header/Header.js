import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Cryptocurrency prices
            </Text>
        </View>
    )
  }
};

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 64,
        alignItems: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});

const { headerContainer, header } = styles;

export default Header;