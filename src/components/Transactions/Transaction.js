import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TitleDescription from '../Widgets/TitleDescription'
import { mongoDBDateToYMDHMS } from '../../utils/functions'

const Transaction = ({titles,data}) => {
    if(!titles)
    return (
        <View style={styles.container}>
            <TitleDescription  description={data.sender.firstName} />
            <TitleDescription  description={data.receiver.firstName} />
            <TitleDescription description={mongoDBDateToYMDHMS(data.createdAt)} />
            <TitleDescription  description={data.transferredTocos} />
        </View>
    )

    return (
        <View style={styles.container}>
            <TitleDescription title={"sender"} />
            <TitleDescription title={"receiver"} />
            <TitleDescription title={"date"}  />
            <TitleDescription title={"amount"}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-evenly",
        flexDirection:"row"
    }
})
export default Transaction