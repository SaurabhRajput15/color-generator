import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [randomBackground, setrandomBackground] = useState('#ffffff')

  let generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = '#'

    for(let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setrandomBackground(color)
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground}/>
        <View style={[styles.container, {backgroundColor: randomBackground}] }>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press me</Text>
            </View>
         </TouchableOpacity>
      
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  actionBtn:{
    paddingHorizontal:22,
    paddingVertical:15,
    backgroundColor: "#6A1B4D",
    borderRadius:15,
  },
  actionBtnTxt:{
    color:'#fff',
    fontWeight:'bold'
  }
})