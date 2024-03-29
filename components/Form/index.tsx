import React, { useState } from "react";
import { Text, View, TextInput, Keyboard, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./style";
const Form = (props: any) => {

const [task, setTask] = useState('')

const onprogress = () => {
    console.log(task, "1111");
    
    if(!task.length){
        alert("vui long nhap thong bao");
        return false
    }
    props.onAddTask(task) 
    setTask("") 
    Keyboard.dismiss()

}
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ?  'padding' : 'height'}
    keyboardVerticalOffset={10}
    style={styles.addTask}>
      <TextInput value={task} onChangeText={text => setTask(text)} placeholder="Your text" style={styles.input} />
      <TouchableOpacity onPress={onprogress}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
