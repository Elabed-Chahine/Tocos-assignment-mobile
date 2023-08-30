import { View, Text } from 'react-native'
import React from 'react'
import { Center, Skeleton, VStack } from 'native-base';

const LoadingSkeleton = () => {
    return <Center w="100%" style={{display: 'flex',flexDirection: 'row'}}>
        <VStack w="175" h='180' mx='4' maxW="175" borderWidth="1" space={8} overflow="hidden" rounded="3xl" _dark={{
            borderColor: "coolGray.900"
        }} _light={{
            borderColor: "coolGray.200"
        }}>
            <Skeleton h="16" />
            <Skeleton.Text px="4"  h={2} />
            <Skeleton width={90} h={5} m={4} rounded="2xl" startColor="indigo.300" />
        </VStack>

        <VStack w="175" h='180' mx='4' maxW="175" borderWidth="1" space={8} overflow="hidden" rounded="3xl" _dark={{
            borderColor: "coolGray.900"
        }} _light={{
            borderColor: "coolGray.200"
        }}>
            <Skeleton h="16" />
            <Skeleton.Text px="4" h={1} />
            <Skeleton width={90} h={5} m={4} rounded="2xl" startColor="indigo.300" />
        </VStack>
       
    </Center>;
};

export default LoadingSkeleton