import { useState, useEffect } from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Image, View, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const Screen2 = ({route, navigation}) => {
    const [todos, setTodos] = useState({});
    const {name} = route.params;
    // const [title, setTitle] = useState('');
    // const [backgroundColor, setBackgroundColor] = useState('rgba(0,0,0,0.1)');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${name}`, {
        method: 'GET',
        headers: {'content-type':'application/json'},
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        }).then(todolist => {
            setTodos(todolist)
        }).catch(error => {
            console.log("Error ", error);
        })
    }, [])

    const updateCompletedTodo = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: true,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log("Update completed successfully ", json));
    }

    const editTodo = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'title 123',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log("Edit title successfully ", json));
    }

    const deleteTodo = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
        });
        console.log("delete successfully");
    }

    return <View style={{width: '100%', height: '100%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '15px', marginHorizontal: '15px'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Image source={require('../assets/img/letter.png')} style={{width: '40px', height: '40px', borderRadius: '20px', marginRight: '10px', marginLeft: '40px'}} />
            <View>
                <Text style={{fontWeight: 'bold', fontSize: '20px'}}>Hi {name}</Text>
                <Text style={{fontSize: '14px', fontWeight: 'bold'}}>Have agrate day a head</Text>
            </View>

        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: '1px', borderStyle: 'solid', paddingHorizontal: '10px', paddingVertical: '10px', marginTop: '20px', marginHorizontal: '15px'}}>
            <Icon name="search" size={24} color="black" />
            <TextInput placeholder="Search" placeholderTextColor="rgba(0,0,0,0.3)" style={{outlineStyle: 'none', marginLeft: '10px'}} />
        </View>
        <View style={{marginTop: '50px', marginHorizontal: '15px'}}>
            {todos?.length > 0 && todos.map((todo, idx) => {
                return <View key={todo.id} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: todo.completed ? "yellow" : "rgba(0,0,0,0.1)", paddingHorizontal: '15px', paddingVertical: '10px', marginBottom: '15px', borderRadius: '10px'}}>
                        <TouchableOpacity onPress={() => updateCompletedTodo(todo.id)}>
                            <Icon name="check-square" size={24} color="green" />
                        </TouchableOpacity>
                        <Text style={{fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', marginRight: 'auto'}}>{todo.title}</Text>
                        <TouchableOpacity onPress={() => editTodo(todo.id)}>
                            <Icon name="edit" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                            <Icon name="trash" size={24} color="red" style={{marginLeft: '10px'}} />
                        </TouchableOpacity>
                    </View>
            })}
        </View>
        <TouchableOpacity 
            style={{backgroundColor: 'cyan', borderRadius: '50%', paddingHorizontal: '20px', paddingVertical: '15px', marginHorizontal: 'auto', marginTop: '20px'}} 
            onPress={() => navigation.navigate("Screen3")}    
        >
            <Icon name="plus" size={24} color="white" />
        </TouchableOpacity>
    </View>
}

export default Screen2;