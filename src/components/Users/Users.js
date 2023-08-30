import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Card from "./UserCard"
const Users = ({ selectedUser, setSelectedUser, data }) => {
  return (
    <FlatList
     data={data}
      horizontal={true}
      keyExtractor={item => item._id}
      renderItem={({ item }) => <Card user={item} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />} 
      extraData={selectedUser}
      />
       
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  }
})
export default Users