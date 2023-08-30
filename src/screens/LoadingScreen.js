import { View, Text,StatusBar,SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import {Image } from "native-base";
import Spinner from '../components/Widgets/Spinner';
const LoadingScreen = ({navigation}) => {
 useEffect(() => {
  const timer= setTimeout(() => {navigation.push("Login")},2000)
 }, []);
  return (
    <SafeAreaView style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
<Image source={ require("../assets/icon.png")} size={110} alt='Logo' />
  <Spinner />
    </SafeAreaView>
  )
}

export default LoadingScreen