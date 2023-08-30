import { View, Text } from 'react-native'
import React from 'react'
import { Button, Menu, Select, ThreeDotsIcon, VStack } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'
const  MenuButton=({navigation})=> {
    const logout = async()=>{
        await AsyncStorage.removeItem('@id');
        await AsyncStorage.removeItem('@token');
        await AsyncStorage.removeItem('@firstName');
        await AsyncStorage.removeItem('@lastName');
        await AsyncStorage.removeItem('@balance');
navigation.push("Login")
        
    }
    const [shouldOverlapWithTrigger] = React.useState(false);
    const [position, setPosition] = React.useState("auto");
    return <VStack mr="4">
        <Menu w="110" shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
            placement={position == "auto" ? undefined : position} trigger={triggerProps => {
                return <Button alignSelf="center" variant="solid"  {...triggerProps}>
                    <Text style={{color:"white"}}>Menu</Text>
                </Button>;
            }}>
            <Menu.Item onPress={logout}>Logout</Menu.Item>
            <Menu.Item>Balance</Menu.Item>
           
        </Menu>
    </VStack>;
}
export default MenuButton