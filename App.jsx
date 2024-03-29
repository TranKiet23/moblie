import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";

import Task from "./components/Task";
import Form from "./components/Form";
import styles from "./App.components.styles";

let App = () => {
  const [taskList, setTaskList] = useState ([])
  const handleAddTask = (task)=> {
    console.log('task: ', task);
    setTaskList([...taskList, task])
    
  }

  const handleDeleteTask = (index)=> {
    Alert.alert(
      'thông báo!!',
      'Bạn có chắc muốn xóa?',
      [
        {
          text: 'OK',
          onPress: () => {
            let taskTmp = [...taskList]
            taskTmp.splice(index, 1)
            setTaskList(taskTmp)
          },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        
      ],
    );
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}> Todo List</Text>
      </View>
      <ScrollView style={styles.items}>
        { 
          taskList.map((item, index) => {
          return <Task key={index} title={item} number={index + 1 } onDeleteTask={() =>handleDeleteTask(index) }/>
        })
        }
      </ScrollView>
      <Form onAddTask={handleAddTask} />
   
    </View>
    
  );
};

export default App;

