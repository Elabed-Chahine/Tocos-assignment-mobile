import { View, Text } from 'react-native'
import React from 'react'
import { Heading, Icon, Input, VStack,MaterialIcons, SearchIcon } from 'native-base'
import { Image } from 'react-native-svg'

const SearchBar = ({searchValue,setSearchValue}) => {
  return (
        <VStack w="50%"  space={5} alignSelf="center" m='6'>
          <Input value={searchValue} onChangeText={(text)=>setSearchValue(text)} placeholder="Search People & Places" width="100%" borderRadius="18" py="3" px="1" fontSize="14" InputLeftElement={<SearchIcon m="2" ml="3" size="6" color="gray.400" />}  />
        </VStack>
  )
}
export default SearchBar