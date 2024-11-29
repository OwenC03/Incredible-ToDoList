import React from "react";
import { Pressable, View, Text, ScrollView, StyleSheet } from "react-native";

function TodoList({ tasks = [] }) { // Default to an empty array if tasks is undefined
  if (tasks.length === 0) {
    return <Text>No tasks available.</Text>; // Handle when no tasks are available
  }

  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  taskText: {
    fontSize: 16,
    color: "black",

  },
});

export default TodoList;
