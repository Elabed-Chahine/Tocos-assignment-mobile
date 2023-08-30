import { View, Text } from 'react-native'
import React from 'react'
import { Center, HStack, Skeleton, VStack } from 'native-base';

const TransactionSkeleton = () => {
    return <Center w="100%">
        <HStack w="100%" maxW="400"  space={8} rounded="md" _dark={{
            borderColor: "coolGray.500"
        }} _light={{
            borderColor: "coolGray.200"
        }} p="4">
            
            <VStack flex="3" space="4">
                <Skeleton.Text  />
                <Skeleton.Text />
                <Skeleton.Text />
                <Skeleton.Text />
            </VStack>
        </HStack>
    </Center>;
};
export default TransactionSkeleton