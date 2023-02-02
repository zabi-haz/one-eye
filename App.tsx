import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,{ useState } from "react"
import ToDoTask from "./todo"

const App : React.FC = () =>{
  interface ToDo{
    name: String,
    time: String,
    id:Number
  }
  const [data, setData] = useState([
    {
      name:"workout",
      time:"22.4",
      id:1,
    },
    {
      name:"sleep",
      time:"22.4",
      id:2,
    },
    {
      name:"shit",
      time:"22.4",
      id:3,
    },
  ])

  return(
    <View style={styles.container}>
      <Text> hi there</Text>
    </View>
  );

}


const styles = StyleSheet.create({
  container:{
    "flex":1,
    "justifyContent":"center",
    "alignItems":"center"
  }
})

export default App;
