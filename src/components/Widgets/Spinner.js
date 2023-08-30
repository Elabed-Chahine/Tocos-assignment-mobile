import { View, Text } from 'react-native'
import React from 'react'
import { Box, HStack, Heading, Image, Spinner } from "native-base";

const LoadingSpinner = () => {
  {
          return <HStack space={3} justifyContent="center">
              <Spinner color="indigo.500" size={45} />
          </HStack>;
      };
  
}

export default LoadingSpinner