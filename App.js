import React, { useState} from "react";
import { View, StyleSheet } from "react-native";
import TodoForm from "./ToDoForm";
import TodoList from "./ToDoList";

export default function App() {

  const [tasks] = useState([
    "Do Laundry",
    "Go to gym",
    "Walk dog"
  ]);

  return (
    <View style={styles.container}>
      <TodoForm />
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
