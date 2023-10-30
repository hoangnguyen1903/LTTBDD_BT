import { useEffect } from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Image, View, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const Screen2 = () => {
    const [todos, setTodos] = useState({});

    useEffect(() => {
        fetch('https://653f24b69e8bd3be29dffeee.mockapi.io/api/v1/todolist/1', {
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
    return <View style={{width: '100%', height: '100%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '15px', marginHorizontal: '15px'}}>
            <Icon name="arrow-left" size={24} color="black" />
            <Image source={require('../assets/img/letter.png')} style={{width: '40px', height: '40px', borderRadius: '20px', marginRight: '10px', marginLeft: '40px'}} />
            <View>
                <Text style={{fontWeight: 'bold', fontSize: '20px'}}>Hi {todo.name}</Text>
                <Text style={{fontSize: '14px', fontWeight: 'bold'}}>Have agrate day a head</Text>
            </View>

        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: '1px', borderStyle: 'solid', paddingHorizontal: '10px', paddingVertical: '10px', marginTop: '20px', marginHorizontal: '15px'}}>
            <Icon name="search" size={24} color="black" />
            <TextInput placeholder="Search" placeholderTextColor="rgba(0,0,0,0.3)" style={{outlineStyle: 'none', marginLeft: '10px'}} />
        </View>
        <View style={{marginTop: '50px', marginHorizontal: '15px'}}>
            {todos.todolist.length > 0 && todos.todolist.map((todo, idx) => {
                return <View key={todo.id} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.1)', paddingHorizontal: '15px', paddingVertical: '10px', marginBottom: '15px', borderRadius: '10px'}}>
                    <Icon name="check-square" size={24} color="green" />
                    <Text style={{fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', marginRight: 'auto'}}>{todo}</Text>
                    <Icon name="edit" size={24} color="red" />
            </View>
            })}
        </View>
        <TouchableOpacity style={{backgroundColor: 'cyan', borderRadius: '50%', paddingHorizontal: '20px', paddingVertical: '15px', marginHorizontal: 'auto', marginTop: '20px'}} >
            <Icon name="plus" size={24} color="white" />
        </TouchableOpacity>
    </View>
}

export default Screen2;