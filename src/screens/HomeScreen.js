import { SafeAreaView, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Users from '../components/Users/Users'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert, Divider, Heading, Toast } from 'native-base'
import axios from 'axios'
import { SERVER_URL } from '../utils/consts'
import SearchBar from '../components/Widgets/SearchBar'
import Header from '../components/Home/Header'
import LoadingSkeleton from '../components/Widgets/Skeleton'
import Transaction from '../components/Transactions/Transaction'
import Transactions from '../components/Transactions/Transactions'
const HomeScreen = ({ navigation }) => {
    const [selectedUser, setSelectedUser] = useState("")
    const [connectedUser, setConnectedUser] = useState({})
    const [searchValue, setSearchValue] = useState("")
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserFromAsyncStorage()
    }, [])

     useEffect(() => {
        if(connectedUser.token){
        setLoading(true)
         setTimeout(() => { searchUsers() },2000)
         setLoading(false)}
    }, [searchValue,connectedUser])

    const searchUsers = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}users/search?q=${searchValue}`, { headers: { Authorization: `Bearer ${connectedUser.token}` } })
             if (res.data.data) {
                setData(res.data.data)
            } 
        } catch (error) {
            console.log(error.response.data.message);
             Toast.show({ title: "Something went wrong !", }) 
        }
    } 

    const getUserFromAsyncStorage = async () => {
        try{
            const token = await AsyncStorage.getItem("@token")
            const id = await AsyncStorage.getItem('@id');
            const firstName = await AsyncStorage.getItem('@firstName');
            const lastName = await AsyncStorage.getItem('@lastName');
            const balance = await AsyncStorage.getItem('@balance'); 
            console.log(token);
            if(token?.length>14){
                setConnectedUser({ token, id, firstName, lastName, balance })
            }
        }catch(err){
          console.error('err ', err);
          navigation.push("Login")
        }
    }

    return (
        <SafeAreaView style={{ height: "100%" }}>
            <View style={{height:"50%"}}>
            <Header navigation={navigation} user={connectedUser}/>
            <SearchBar searchVlue={searchValue} setSearchValue={setSearchValue} />
                {loading ? <LoadingSkeleton /> : data.length > 0 ? <Users selectedUser={selectedUser} setSelectedUser={setSelectedUser} data={data} /> : <LoadingSkeleton />}</View>
            <Heading fontSize={15} alignSelf="center" w="70%" color="#176B87" > Select a user to view your transactions</Heading>

            <Divider bg="black" thickness="2" mx="2" mt="4" />
            <Transaction titles />
             <Transactions loading={loading} selectedUser={selectedUser} uid={connectedUser.id} token={connectedUser.token}/>
        </SafeAreaView>
    )
}

export default HomeScreen