import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Box, Button, Center, FormControl, HStack, Heading, Input, Link, VStack, useToast } from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SERVER_URL } from '../utils/consts';
const LoginScreen = ({ navigation }) => {
    const toast = useToast();
    useEffect(() => {
        getUser()
    }, [navigation])

    const getUser = async () => {
        const token = await AsyncStorage.getItem("@token")
        if (token) {
            navigation.push("Home")
        }
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onSubmit = async () => {

        const formData = {
            email: email,
            password: password,
        }
        try {
            const response = await axios.post(`${SERVER_URL}users/login`, formData);
            console.log(response);
            if (response.data) {
                await AsyncStorage.setItem('@id', response.data.data._id);
                await AsyncStorage.setItem('@token', response.data.data.token);
                await AsyncStorage.setItem('@firstName', response.data.data.firstName);
                await AsyncStorage.setItem('@lastName', response.data.data.lastName);
                await AsyncStorage.setItem('@balance', response.data.data.balance.toString());
            }
            navigation.replace("Home")
        } catch (err) {
            console.log(err);
            toast.show({
                title: err.response.data.message,
                placement: "bottom"
            })
        }
    }
    return <Center w="100%" h="100%">

        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <View style={{ display: "flex", alignItems: "center" }}>
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Welcome
                </Heading>
                <Heading ml="12" mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="sm">
                    Sign in to continue forward
                </Heading>
            </View>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email ID</FormControl.Label>
                    <Input value={email} onChangeText={(e) => { setEmail(e) }} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" value={password} onChangeText={(text) => { setPassword(text) }} />

                </FormControl>
                <Button onPress={onSubmit} mt="2" colorScheme="indigo">
                    Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        I'm a new user.{" "}
                    </Text>
                    <Link _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                    }} href="#">
                        Sign Up
                    </Link>
                </HStack>
            </VStack>
        </Box>
    </Center>;
};

export default LoginScreen