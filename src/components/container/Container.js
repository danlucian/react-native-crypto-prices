import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import FetchCoinData from '../../redux/actions/FetchCoinData';

class Container extends Component {
    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin) => 
            <CoinCard 
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        ) 
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