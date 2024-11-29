import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import TodoList from "../components/ToDoList";
import TodoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
      <View>
        <TodoForm onAddTask={addTask} />
        <TodoList tasks={tasks} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
