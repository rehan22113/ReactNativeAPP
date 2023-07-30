import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Logo.png')}
        style={styles.image}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        marginHorizontal:40,
        resizeMode:'contain',
        width:250
    }
})