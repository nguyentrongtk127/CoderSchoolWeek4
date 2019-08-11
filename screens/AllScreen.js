import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';


export default function AllScreen() {
  const [data, setData] = useState([{ key: '1', title: 'Homework English', isDone: false }, { key: '2', title: 'Homework - Todo List', isDone: false },
  { key: '3', title: 'Research new technology', isDone: false }, { key: '4', title: 'Task in company', isDone: false }
  ])
  const [task, setTask] = useState('')
  const handleOnPressTask = (index) => {
    const temp = data.map(item => item)
    temp[index].isDone = !temp[index].isDone
    setData(temp)
  }
  const handleAddTask = (task) => {
    const temp = data.map(item => item)
    const item = {
      key: (Number(temp[temp.length - 1].key) + 1).toString(),
      title: task,
      isDone: false
    }
    temp.push(item)
    setData(temp)
    setTask('')
  }
  const handleOnChange = (value) => {
    setTask(value)
  }
  const handleDeleteTask = (item) => {
    const temp = data.filter(task => task.key != item.key)
    setData(temp)
  }
  const menuDeleteTask = (item) => {
    const prompt = `"${item.title}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => handleDeleteTask(item) }
      ],
      { cancelable: true }
    );
  }
  return (
    <KeyboardAvoidingView
      enabled
      behavior="padding"
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={item.isDone ? { ...styles.task, backgroundColor: 'blue' } : styles.task}
                onPress={() => handleOnPressTask(index)}
                onLongPress={() => menuDeleteTask(item)}>
                <Text style={styles.txtTask}>{Number(index + 1) + '.' + item.title}</Text>
              </TouchableOpacity>
            )
          }}
          numColumns={1}
        />
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TextInput style={styles.txtInput} value={task} onChangeText={handleOnChange} />
          <View style={styles.btnSubmit}>
            <Button
              onPress={() => handleAddTask(task)}
              title="Submit"
              color="black"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </ScrollView>


    </KeyboardAvoidingView>
  );
}
AllScreen.navigationOptions = {
  title: 'All Todos',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  itemTodo: {
    width: '100%',
    height: 50,
    backgroundColor: 'green'
  },
  todolist: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  task: {
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center",
    fontSize: 16,
  },
  txtTask: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10
  },
  txtInput: {
    height: 30,
    padding: 5,
    width: 300,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'lightblue',
    margin: 10
  },
  btnSubmit: {
    backgroundColor: 'blue',
    borderRadius: 10
  }
});
