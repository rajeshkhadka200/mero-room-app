import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Fav = () => {
  return (
    <View style={styles.container}>
      <Text>Favourite</Text>
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
export default Fav