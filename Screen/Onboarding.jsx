import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboarding = ({navigation}) => {
    const [userData,setUserData] = useState({
        firstName:'',
        email:''
    });

    const Validate=(text,name)=>{
        let isValid;
        if(name == 'email'){
            isValid= (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(text)
        }
        else if(name=='firstName'){
           isValid= (/([a-zA-Z]{3,30}\s*)+/).test(text)
        }
       return isValid
    }

    const HandleValue=(value,name)=>{
        const valid = Validate(value,name);
        if(valid){
            setUserData({...userData,[name]:value})
        }
    }
    const submitHandler =async()=>{
        if(userData.email && userData.firstName){
             await AsyncStorage.setItem('boarding','true')
             await AsyncStorage.setItem('firstName',userData.firstName)
             await AsyncStorage.setItem('email',userData.email)
             navigation.navigate('profile')       
        }else{
            Alert.alert("Field is missing or text is not valid")
        }
    }
  return (
    <SafeAreaView>
    <View style={style.header}>
        <Image 
            source={require('../assets/Logo.png')}
            style={style.image}
        />
    </View>
    <View style={style.container}>

    <View style={style.title}>
        <Text style={style.txt}>Let us get to know you</Text>
    </View>
    <View style={style.form}>
        <Text style={style.txt}>First Name</Text>
        <TextInput onChangeText={(text,name='firstName')=>HandleValue(text,name)} style={style.input} />
        <Text style={style.txt}>Email</Text>
        <TextInput onChangeText={(text,name='email')=>HandleValue(text,name)} style={style.input}/>
    </View>
    </View>
    <View style={style.footer}>
        <Pressable style={style.btn} onPress={submitHandler}>
        <Text>Next</Text>
        </Pressable>
    </View>
    </SafeAreaView>
  )
}

export default Onboarding

const style = StyleSheet.create({
    container:{
        alignItems:'stretch',
        justifyContent:'space-around',
        height:'75%',
        // backgroundColor:'green'
    },
    txt:{
        fontSize:20,
        textAlign:'center',
        marginBottom:7
    },
    header:{
        height:100,
        backgroundColor:'lightgray',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{

        resizeMode:'contain',
        width:250
    },
    title:{
        marginTop:40,
        marginBottom:50
    },
    form:{
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        borderWidth:1,
        borderRadius:7,
        padding:4,
        width:250,
    },
    footer:{
        backgroundColor:'lightgray',
        justifyContent:'space-evenly',
        alignItems:'flex-end',
        paddingRight:40,
        height:'11%'
    },
    btn:{
        borderWidth:1,
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:10
    }
})