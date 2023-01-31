import {View , Text, Button, StyleSheet} from "react-native"
const HomeScreen = ({navigation}) =>{
  return(
    <View style={styles.main_home_page_container}>
      <View style={styles.top_info_container}>
        <Text>hello from home page</Text>
        <Button
          title="go to workout"
          onPress={()=> navigation.navigate('Wrokout')}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

})


export default HomeScreen
