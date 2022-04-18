import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Myroom = () => {
  return (
    <View style={styles.container}>
      <Text>Myroom</Text>
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
export default Myroom