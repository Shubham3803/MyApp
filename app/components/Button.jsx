import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title , onPress}) => {
  return (
 <TouchableOpacity onPress={onPress}>
   <Text>{title}</Text>
 </TouchableOpacity>
  )
}

export default Button
