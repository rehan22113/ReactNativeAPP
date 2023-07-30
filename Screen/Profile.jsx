import { StyleSheet, Text, View,Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { MaskedTextInput } from 'react-native-mask-text'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MyCheckbox({ onChange, checked }) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onChange}>
      {checked && <Ionicons name="checkmark" size={20} color="white" />}
    </Pressable>
  );
}



const Profile = ({navigation}) => {
  const [user,setUser] = React.useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  })
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  React.useEffect(()=>{
    (async()=>{
        let [a,b] = await AsyncStorage.multiGet(['firstName','email'])
       setUser({
        ...user,firstName:a[1],email:b[1]
       })
    })()
  },[])
  const Logout = async()=>{
    await AsyncStorage.clear()
    navigation.push('boarding')
}
  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.paragraph}>Personal Information</Text>
    </View>
      <Text>Avatar</Text>
    <View style={styles.head}>
      <View>
        <Image style={styles.avatar} source={{uri:'https://dummyimage.com/200x200'}} />
      </View>
      <View style={styles.btngrp}>
        <Pressable style={styles.btn}>
          <Text style={{color:'white'}}>Change</Text>
        </Pressable>
        <Pressable style={styles.btn1}>
          <Text style={{color:'darkgreen'}}>Remove</Text>
        </Pressable>
      </View>
    </View>
    <View>
      <View>
        <Text style={styles.label}>First Name</Text>
        <TextInput value={user.firstName} style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Last Name</Text>
        <TextInput value={user.lastName} style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput value={user.email} style={styles.input} />
      </View>
    <View>
        <Text style={styles.label}>Phone</Text>
        <MaskedTextInput
        style={styles.input}
        keyboardType="numeric"
          mask="9-999-9999"
          onChangeText={()=>{}}
        />
      </View>
      <View>
      <Text style={styles.paragraph}>Email notifications</Text>
    </View>
      <View style={styles.check}>
      <MyCheckbox onChange={() => setChecked(!checked)} checked={checked} />
        <Text style={styles.label}>Order Status</Text>
      </View>
      <View style={styles.check}>
      <MyCheckbox onChange={() => setChecked1(!checked1)} checked={checked1} />
        <Text style={styles.label}>Password changes</Text>
      </View>
      <View style={styles.check}>
      <MyCheckbox onChange={() => setChecked2(!checked2)} checked={checked2} />
        <Text style={styles.label}>Special offers</Text>
      </View>
      <View style={styles.check}>
      <MyCheckbox onChange={() => setChecked3(!checked3)} checked={checked3} />
        <Text style={styles.label}>Newsletters</Text>
      </View>
    </View>
    <View style={styles.logout}>
    <Pressable
        onPress={Logout}
        style={styles.lg}>
          <Text style={{textAlign:'center',fontWeight:800}}>Log out</Text>
        </Pressable>
    </View>
    <View style={styles.btnfooter}>
        <Pressable style={styles.btn1}>
          <Text style={{color:'darkgreen'}}>Discard changes</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={{color:'white'}}>Save changes</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  head:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10
  },
  btngrp:{
    flexDirection:'row',
    gap:15,
    marginHorizontal:10
  },
  btn:{
    // borderWidth:1,
    padding:10,
    paddingHorizontal:16,
    paddingVertical:8,
    borderRadius:5,
    backgroundColor:'darkgreen',
    
  },
  btn1:{
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:16,
    paddingVertical:8
    
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'darkgreen',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'darkgreen',
  },
  check:{
    flexDirection:'row',
    justifyContent:'',
    gap:10,
    marginVertical:2
    // alignItems:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 15,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom:10
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:30
  },
  label: {
    fontSize: 12,
    marginTop: 5,
  },
  input: {
    height: 40,
    marginHorizontal: 0,
    marginVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  logout:{
    marginBottom:20,

  },
  lg:{
    backgroundColor:'linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)',
    borderRadius:10,
    borderColor:'#fcc932',
    borderWidth:2,
    paddingVertical:8,
    marginTop:10
  },
  btnfooter:{
    flexDirection:'row',
    gap:10,
    justifyContent:'center'
  },
});