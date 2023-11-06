import { TouchableOpacity } from "react-native";
import { Image, View, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useState } from "react";

const Screen3 = ({navigation}) => {
    const [title, setTitle] = useState('');

    const createTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({userId: 1, title, completed: false})
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        }).then(todo => {
            console.log(todo);
        }).catch(error => {
            console.log("Error ", error);
        })
    }

    return <View style={{width: '100%', height: '100%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '15px', marginHorizontal: '15px'}}>
            <Image source={require('../assets/img/letter.png')} style={{width: '40px', height: '40px', borderRadius: '20px'}} />
            <View style={{marginLeft: '10px', marginRight: 'auto'}}>
                <Text style={{fontWeight: 'bold', fontSize: '20px'}}>Hi Twinkle</Text>
                <Text style={{fontSize: '14px', fontWeight: 'bold'}}>Have agrate day a head</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: '40px', textAlign: 'center', marginVertical: '30px', textTransform: 'uppercase'}}>Add your job</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: '1px', borderStyle: 'solid', paddingHorizontal: '10px', paddingVertical: '10px', marginHorizontal: '15px'}}>
            <Icon name="envelope" size={24} color="black" />
            <TextInput placeholder="Input your job" placeholderTextColor="rgba(0,0,0,0.3)" style={{outlineStyle: 'none', marginLeft: '10px'}} value={title} onChangeText={(text) => setTitle(text)} />
        </View>
        <TouchableOpacity 
            style={{backgroundColor: 'cyan', borderRadius: '10px', paddingHorizontal: '40px', paddingVertical: '10px', marginHorizontal: 'auto', marginTop: '40px', flexDirection: 'row', alignItems: 'center'}} 
            onPress={createTodo}
        >
            <Text style={{fontSize: '20px', marginRight: '10px', color: 'white', textTransform: 'uppercase'}}>Finish</Text>
            <Icon name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/img/letter.png')} style={{width: '200px', height: '200px', marginHorizontal: 'auto', marginTop: '40px'}} />
    </View>
}

export default Screen3;