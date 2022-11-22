import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { Linking } from 'expo'


export default class DetailsScreen extends React.Component{
    static navigationOptions = {
        title: 'Info',
        headerStyle: {
          backgroundColor: '#EE2C2C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    render(){
        return(
            <ScrollView style={styles.screen}>
                <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
                <View style={styles.info}>
                    <Text style={styles.source}>{this.props.navigation.state.params.source}</Text>
                    <Text>{this.props.navigation.state.params.time}</Text>
                </View>
                <Image style={styles.image} source={{uri: this.props.navigation.state.params.image || 'https://imgplaceholder.com/72x80'}}/>
                <Text style={styles.content}>{this.props.navigation.state.params.content}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(this.props.navigation.state.params.url)}><Text style={styles.fullNew}>Touch here to see the complete new</Text></TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#fff'
    },
    image:{
        width: 500,
        height: 350
    },
    title:{
        fontWeight: 'bold',
        flexShrink: 1,
        marginRight: 5,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 10,
        fontSize: 30
    },
    subtitle:{
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    },
    info:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    source:{
        fontWeight: 'bold',
    },
    content:{
       margin: 10,
       fontSize: 18
    },
    fullNew:{
        color: '#007AFF',
        marginLeft:10,
        marginBottom: 10,
        fontSize: 15
    }

})