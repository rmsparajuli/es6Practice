// Api  concept

// make state

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

export default class API extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        };
    }

    getUserFromApi = () => {
        return (
            fetch('https://randomuser.me/api/?results=50')
                .then(response => response.json())
                .then(
                    responseJson => {
                        this.setState({
                            isLoading: false,
                            dataSource: this.state.dataSource.concat(responseJson.results  )
                        })
                    }
                )
                .catch(error => console.log(error))
        )
    }

// optional , can be use in flatlist:
    _keyExtractor = ( item, index )=> item.id

    componentDidMount() {
        this.getUserFromApi();
    }
    
    render() {
        if ( this.state.isLoading ){
            return(
                <View>
                    <ActivityIndicator size='large' color="red" />
                </View>
            )

        }
        return (
            <FlatList
                    data={this.state.dataSource}
                    keyExtractor={this._keyExtractor}
                    renderItem= {({item})=>{
                        <View>
                           <Text>
                               {item.name.first}
                           </Text>
                        </View>
                    }}
                />
        );
    }
}
