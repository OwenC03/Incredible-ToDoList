import React, { useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import TodoForm from "./app/ToDoForm";
import TodoList from "./app/ToDoList";

export default function App() {

  const [tasks, setTasks] = useState([
    "Do Laundry",
    "Go to gym",
    "Walk dog",
  ]);

  const addTask = (taskText) => {
      setTasks([...tasks, taskText]);
  };

  return (
    <View style={styles.container}>
      <TodoForm addTask={addTask}/>
      <TodoList tasks={tasks}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
});
