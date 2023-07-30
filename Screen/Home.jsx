import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';




const Home = ({navigation}) => {
  const [data,setData] = React.useState([])
  React.useEffect(()=>{
    (async()=>{
      const res = await fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json')
      const original = await res.json()
      setData(original)
    })()
  },[])
  return (
    <View>
    <View style={styles.header}>

      <View style={styles.maintext}>
        <Text style={styles.title}>Little Lemon</Text>
        <Text style={styles.subtitle}>Chicago</Text>
      </View>
      <View style={styles.paraview}>
        <Text style={styles.para}>We are family owned Mediterranean restaurant focused on tradional, focused on traditional recipes served with a modern twist.</Text>
        <Image
          source={{uri:'https://dummyimage.com/300x300'}}
          resizeMode='cover'
          width={100}
          height={100}
          style={styles.image}
        />
      </View>
      <Pressable style={styles.search}>
      <Ionicons name="search" size={24} color="black" />
      </Pressable>
    </View>
      <View style={styles.filter}>
        <Text style={{marginBottom:10,fontWeight:700,fontSize:18}}>ORDER FOR DELIVERY!</Text>
        <View style={styles.btngrp}>
          <Pressable style={styles.btn}>
            <Text style={{textAlign:'center'}}>Starters</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Text style={{textAlign:'center'}}>Mains</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Text style={{textAlign:'center'}}>Desserts</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Text style={{textAlign:'center'}}>Drink</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
      style={styles.list}
        data={data.menu}
        renderItem={({item})=>{
          return <>
          <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'lightgray',paddingVertical:4}}>
            <View>
            <Text style={{fontSize:18,fontWeight:700}}>{item.name}</Text>
              <Text style={{fontSize:14,width:200}}>{item.description}</Text>
              <Text style={{fontSize:18,fontWeight:700,marginTop:5,color:'black'}}>${item.price}</Text>
            </View>
            <View>
              <Image 
              style={styles.image}
              resizeMode='cover'
              width={100}
              height={100}
              source={{uri:`https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true`}}
               />
            </View>
          </View>
          </>
        }}
        keyExtractor={(item,index)=>item.name}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#495E57',
    padding:10
  },
  head:{

  },
  title:{
    color:'white',
    fontSize:42,
  },
  subtitle:{
    color:'white',
    fontSize:28,
  },
  paraview:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10
  },
  para:{
    width:200,
    color:'white'
  },
  image:{
    borderRadius:10
  },
  search:{
    backgroundColor:'white',
    width:46,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30
  },
  filter:{
    padding:10,
    marginTop:10,
    borderBottomWidth:1,
    borderColor:'lightgray'
  },
  btngrp:{
    // width:300,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:8
  },
  btn:{
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'lightgray',
    borderRadius:10
  },
  list:{
    height:310,
    paddingTop:10,
    paddingHorizontal:15
  }
})