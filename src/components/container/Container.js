import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import FetchCoinData from '../../redux/actions/FetchCoinData';

class Container extends Component {
    componentDidMount() {
        this.props.FetchCoinData();
    }

    render() {
        return (
            <View>
                <Text>Container</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(Container);