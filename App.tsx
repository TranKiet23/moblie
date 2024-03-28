import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

let App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.container_top}>
          <View style={styles.top}>
            <Text style={styles.content_top}>
                {'TOP LEFT'}
              </Text>
          </View>
        </View>
        <View style={styles.container_center}>
          <View style={styles.center}>
              <Text style={styles.content_center}>
                  {'Center'}
                </Text>
            </View>
        </View>
        <View style={styles.container_bottom}>
          <View style={styles.bottom}>
            <Text style={styles.content_bottom}>
                {'Bottom Right'}
              </Text>
          </View>
        </View>
      </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  top: {
    flex: 1,
    backgroundColor: "#f4fe87",
    justifyContent:'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 15,
    fontWeight: '600'
   
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent:'center',
    alignItems: 'center',
  },
  bottomLeft: {
    backgroundColor: 'blue',
  },
  bottomRight: {
    backgroundColor: 'pink',
  },
  // container_top : {
  //   flex: 1

  // },
  // container_center : {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'

  // },
  // container_bottom : {
  //   flex: 1

  // },
  // top: {
  //   marginTop: 60,
  //   marginLeft: 40,
  //   marginRight: 40,
  //   backgroundColor: '#f5f5f5',
  //   paddingVertical: 10,
  //   paddingHorizontal:20,
  //   borderWidth: 1,
  //   borderColor: 'red'

  // },
  // content_top: {
  //   marginLeft:15,
  //   fontSize: 15,
  //   color: 'blue',

  // },

  // center: {
  //   width: 150,
  //   height: 150,
  //   backgroundColor: 'green',
  //   borderRadius: 100,
  //   justifyContent: 'center',
  //   alignItems: 'center'

  // },
  // content_center: {
  //   fontSize: 20,
  //   color: 'blue',
  //   fontWeight: 'bold',
    

  // },
  // bottom:{
  //   marginTop: 80,
  //   marginHorizontal: 40,
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   backgroundColor: '#7ee6fd',
  //   borderColor: 'red',
  //   borderRadius: 10
  // },
  // content_bottom: {
  //   textAlign: 'right',
  //   fontSize: 20,
  //   color: '#fff',
  //   fontWeight: "bold"
  // }
 
})