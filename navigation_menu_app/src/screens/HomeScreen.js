import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image } from 'react-native';

const HomeScreen= () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a nuestra app!</Text>
            <Text style={styles.names}>Realizada por:</Text>
            <Text>Susan Abigail Castillo Oliva</Text>
            <Text>Eduardo René Cubías Morán</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#5A65D4',
    padding: 30,
    borderRadius: 10,
    color: 'white'
  },
  names: {
    fontWeight: 'bold',
    marginTop: 20
  }
});
