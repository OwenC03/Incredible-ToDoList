import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const handleNamePress = () => {
    alert('You pressed my name!');
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>App Name: ToDoApp</Text>
        <Text style={styles.subtitle}>Developed by: Owen Carson</Text>
        <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
  name: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});

export default AboutScreen;
