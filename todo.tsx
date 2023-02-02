import {View,Text} from 'react-native'
import React,{} from "react"
import {ToDo} from './todoTypes'
interface Props{
  Data:ToDo
}
const ToDoTask : React.FC<Props> = ({Data:ToDoTask}) =>{
  return(
    <View>
      <Text>hi there</Text>
    </View>
  )
}
export default ToDoTask
