import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image } from 'react-native';

const EstudiantesScreen= () => {

    return (
        <View style={styles.container}>
            <Text>Lista de estudiantes</Text>
        </View>
    );
};

export default EstudiantesScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
});
