import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Alert, Pressable } from 'native-base'

const UserCard = ({ selectedUser, user, setSelectedUser }) => {
    return (
        <Pressable onp onPress={() => { setSelectedUser(user.id) }} style={[styles.container, { borderColor: user.id === selectedUser ? "#64CCC5" : "transparent"}]}>
            <Image style={styles.image} source={require('../../assets/avatar.jpg')} />
            <Text style={styles.name}>{user?.firstName} {user?.lastName}</Text>
            <Text style={styles.transactions}>{user?.transactions?.length} transfers</Text>
            <View style={styles.rightCorner} ><Text style={styles.balance}>{user?.balance}</Text>
                <Image style={{width:15,height:20}} source={require('../../assets/icon.png')} />
            </View>
        </Pressable>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        width: 175,
        height: 180,
        borderStyle: "solid",
        borderRadius: 21,
        display: "flex",
        justifyContent: "flex-start",
        elevation: 1,
        borderWidth:1,
        shadowColor: '#52006A',
        position: "relative",
        marginHorizontal:4
        
    },
    image: {
        height: "60%",
        width: "100%",
        borderRadius: 19,
        objectFit: "contain"
    },
    transactions: {
        backgroundColor: "#A5D7E8",
        fontSize: 9,
        fontWeight: "700",
        textAlign: "center",
        color: "#0B2447",
        width: "50%",
        borderRadius: 12,
        padding: 3,
        position: "absolute",
        bottom: 4,
        left: 8,
    },
    name: {
        color: "#0B2447",
        fontFamily: "HelveticaNe",
        fontSize: 12,
        fontWeight: "700",
        marginLeft: 8
    },
    balance: {
        fontSize: 9,
        fontWeight: "700",
        textAlign: "center",
        color: "#176B87",
        borderRadius: 12,
        padding: 3,
    },
    rightCorner: {
        position: "absolute",
        bottom: 4,
        right: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
    }

})


/*     < Image source = { require('../../assets/avatar.png') } style = { styles.image } /> */