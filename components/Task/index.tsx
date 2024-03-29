import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './style'

const Task = (props : any) => {
    const {number} = props
    const numberText = number < 10 ? '0' + number : number ;
    const itemBg = number % 2 === 0 ? styles.even : styles.odd
    const handclick =  () => {
      props.onDeleteTask()
      
    }
    return (
        <TouchableOpacity onPress={handclick}>
        <View style={styles.item}>
          <View style={[styles.square, itemBg]}>
            <Text style={styles.number}>{numberText}</Text>
          </View>
          <Text style={styles.content}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    )
}

export default Task
