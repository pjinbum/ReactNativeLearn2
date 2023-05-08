import React from 'react'
import  { View , StyleSheet }  from 'react-native'
import Notify from './API/Notify'
import { StatusBar } from 'expo-status-bar'
// import styled from 'styled-components/native'
import ClipBoard from './API/Clipborad'
import Dim from './API/dim'
import Location from './API/location'
import PanResponder from './API/PanRespon'


// const Container = styled.SafeAreaView`
//  flex:1;
//  background-color: #fff;
//  justify-content: center;
//  align-items: center; 
//  `

const App = () => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>
        {/* <Notify></Notify>
        <ClipBoard></ClipBoard> */}
        {/* <Dim></Dim> */}
        {/* <Location></Location> */}
        <PanResponder></PanResponder>
    </View>
  )
}

styles = StyleSheet.create({
    container : {
      justifyContent : 'center' ,
      flex : 1 ,

    } ,
    button : {
        height : 70 ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        backgroundColor : '#eeeeee'
    }
})


export default App