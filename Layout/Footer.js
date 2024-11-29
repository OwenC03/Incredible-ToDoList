import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2024 Your Name</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
});

export default Footer;
