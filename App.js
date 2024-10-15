import React from "react";
import { View, StyleSheet } from "react-native";
import TodoForm from "./ToDoForm";
import TodoList from "./ToDoList";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoForm />
      <TodoList />
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
