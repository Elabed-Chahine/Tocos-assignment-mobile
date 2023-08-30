import { View, Text } from 'react-native'
import React from 'react'

const TitleDescription = ({ title, description }) => {
    return (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginVertical:"47" }}>
            {title && <Text style={{ color: "black", fontSize: 13, fontWeight: "700",width:53 }}>{title}</Text>}
            {description && <Text style={{ color: "black", fontSize: 12, marginRight: 10 }}>{description}</Text>}
        </View>
    )
}


export default TitleDescription