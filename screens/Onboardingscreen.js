import React,{useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
 


const Onboardingscreen = () => {
    const [todos, setTodos] = useState();

    const getTodoData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json) => {
                setTodos(json);
                 
            })
    }

    useEffect(() => {
        getTodoData();
    }, [])

    return (
        <View style={styles.container}>
            <Text>Integrating APIs</Text>

            <ScrollView>
                {!!todos?.length && todos?.map((todo) => {
                    return (
                        <View style={styles.todo}>
                            <Text>{todo?.title}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginTop:70
    },

    todo: {
        width: '100%',
        marginVertical: 16,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        borderRadius: 5,
        backgroundColor: 'lightgreen'
    }
})

 

export default Onboardingscreen;
