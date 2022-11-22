import React from 'react'
import {View, Text, FlatList, Button, StyleSheet, Image, TextInput} from 'react-native'
import {connect} from 'react-redux'
import * as actionCreators from '../redux/actions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'


class MainScreen extends React.Component{
    static navigationOptions = {
        title: 'Latest News',
        headerStyle: {
          backgroundColor: '#EE2C2C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

      componentDidMount(){
          this.props.loadNews('')
      }
    render(){
        const { navigate } = this.props.navigation

        return(
            <View style={styles.page}>
                
                <FlatList data={this.props.articles} renderItem={({item}) => (
                    <TouchableOpacity style={styles.row} onPress={() =>  navigate('DetailsScreen', {description: item.description, image: item.urlToImage, title: item.title, time: item.publishedAt, content: item.content, source: item.source.name, url: item.url, author: item.author  })}>
                            <View style={styles.title}>
                                <Text style={styles.titleText}>{item.title}</Text>
                                <Text style={styles.published}>Published at: {item.publishedAt}</Text>
                            </View>
                            <Image style={styles.image} source={{uri: item.urlToImage || 'https://imgplaceholder.com/72x80'}}/>
                    </TouchableOpacity>
                )}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
   articles: state.articles
})
const styles = StyleSheet.create({
    page:{
        backgroundColor: '#fff'
    },
    row:{ 
        paddingTop: 20,
        paddingBottom:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height: 300,
        width: 400,
        borderRadius: 10,
        marginRight: 10,
        marginLeft:10,
        marginBottom: 20
    },
    title:{
        justifyContent: 'space-around',
        flexShrink: 1,
        marginBottom: 30
    },
    titleText:{
        fontWeight: 'bold',
        fontSize: 25,
        marginRight: 10,
        marginLeft: 10
    },
    published:{
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10
    }
})

export default connect(mapStateToProps, actionCreators)(MainScreen)