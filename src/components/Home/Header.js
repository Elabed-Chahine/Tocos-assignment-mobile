import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Heading, ThreeDotsIcon } from 'native-base'
import MenuButton from '../Widgets/Menu'

const Header = ({ navigation, user }) => {
    return (
        <View style={styles.header}>
            <View style={{ display: "flex" }}>
                <Text style={styles.heading} >Welcome</Text>
                <Text style={{ color: "#176B87" }}> {user.firstName} {user.lastName}</Text>
            </View>
            <Text style={{
                fontSize: 11,
                color: "black",
                fontWeight: "700",
                width:90,
                color:"#176B87"
            }} >Balance:{user?.balance}</Text>

            <MenuButton navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 9,
        paddingVertical: 8,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    heading: {
        fontSize: 15,
        color: "black",
        fontWeight: "700",
        marginLeft: 17,
    },
})
export default Header