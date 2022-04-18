import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title='Register' onPress={() => navigation.navigate('Register')}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Home