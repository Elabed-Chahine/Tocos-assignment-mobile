import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SERVER_URL } from '../../utils/consts'
import axios from 'axios'
import { Toast } from 'native-base'
import Transaction from './Transaction'
import TransactionSkeleton from '../Widgets/TransactionSkeleton'

const Transactions = ({selectedUser,uid,token,isModalOpen,loading}) => {
    const [transactions, setTransactions] = useState([])
 useEffect(() => {
        if(selectedUser!=="" && selectedUser!==uid && !loading) getOurTransactions()
       
    }, [selectedUser,isModalOpen])

    const getOurTransactions = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}transactions/${selectedUser}`, { headers: { Authorization: `Bearer ${token}` } })
          console.log(res.data);
            if (res.data.data) {
                setTransactions(res.data.data)
            }
        } catch (error) {
          console.log(error);
            Toast.show({title:error?.response?.data?.message||"Something went wrong"})
        }
    }
  if (!transactions || loading)
  return (
    <FlatList
      data={transactions}
     vertical={true}
      keyExtractor={item => item._id}
      renderItem={({ item }) => <Transaction data={item }/>}
      extraData={selectedUser}
    />

  );


  return(<TransactionSkeleton />
  )
}

export default Transactions

const styles = StyleSheet.create({})