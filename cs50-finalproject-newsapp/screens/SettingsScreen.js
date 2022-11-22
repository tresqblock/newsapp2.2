import React from 'react'
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import Constants from 'expo-constants';
import {connect} from 'react-redux'
import * as actionCreators from '../redux/actions'

class SettingsScreen extends React.Component{
    
    render(){
        const { navigate } = this.props.navigation

         const changeCategory = category => {
            this.props.loadNews(category)
            navigate('MainScreen')
        }
        return(
            <ScrollView >
                <Text style={styles.title}>Categories</Text>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.category} onPress={() => changeCategory('category=entertainment&')}>
                            <Image style={styles.image} source={require('../assets/entertainment.jpeg')}/>
                            <Text style={styles.categoryTitle}>Entertainment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category} onPress={() => changeCategory('category=technology&')}>
                            <Image style={styles.image} source={require('../assets/technology.jpg')}/>
                            <Text style={styles.categoryTitle}>Technology</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category} onPress={() => changeCategory('category=business&')}>
                            <Image style={styles.image} source={require('../assets/business.jpg')}/>
                            <Text style={styles.categoryTitle}>Business</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category} onPress={() => changeCategory('category=science&')}>
                            <Image style={styles.image} source={require('../assets/science.jpg')}/>
                            <Text style={styles.categoryTitle}>Science</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category} onPress={() => changeCategory('category=health&')}>
                            <Image style={styles.image} source={require('../assets/health.jpg')}/>
                            <Text style={styles.categoryTitle}>Health</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category} onPress={() => changeCategory('category=sports&')}>
                            <Image style={styles.image} source={require('../assets/sports.jpg')}/>
                            <Text style={styles.categoryTitle}>Sports</Text>
                    </TouchableOpacity>
                </View>  
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    category:{
        alignItems: 'center',
        marginBottom: 30
    },
    image:{
        width: 165,
        height: 165,
        borderRadius: 15,
    },
    listContainer:{
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    categoryTitle:{
        marginTop: 20,
        fontSize: 22,
        fontWeight: 'bold'
    },
    title:{
        paddingTop: Constants.statusBarHeight + 10,
        marginLeft: 25,
        fontSize: 40,
        fontWeight: 'bold'
    }
})

const mapStateToProps = state => ({
    articles: state.articles
 })

 export default connect(null, actionCreators)(SettingsScreen)