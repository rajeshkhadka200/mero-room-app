import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
// post screen
const Post = () => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
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
export default Post