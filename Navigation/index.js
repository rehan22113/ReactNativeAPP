import React from 'react'
import Home from '../Screen/Home'
import { Text } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Profile from '../Screen/Profile'
import Onboarding from '../Screen/Onboarding'
import Splash from '../Screen/Splash'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator()

const index = () => {
  const [state,setState] = React.useState({
    isLoading:true,
    isOnboardingCompleted:false
  })
  React.useEffect(()=>{
    (async()=>{
      const get =await AsyncStorage.getItem('boarding');
      console.log("boarding",get)
      setState({
        isLoading:false,isOnboardingCompleted:get
      })
    })()
   },[])

  if(state.isLoading){
    return <>
      <Splash/>
    </>
  }
  return (
   <Stack.Navigator >
   {state.isOnboardingCompleted ? ( 
    <>
    <Stack.Screen name="home" component={Home} /> 
    <Stack.Screen name='profile' component={Profile} />
    </>
   ) : (
  <>
     <Stack.Screen name='boarding' component={Onboarding} />
  </>
   )}
   </Stack.Navigator>
  )
}

export default index