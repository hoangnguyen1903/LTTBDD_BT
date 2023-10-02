import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function SumScreen() {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [tong, setTong] = useState(0);

    return ( <
        View style = { styles.container } >
        <
        View style = {
            { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } } >
        <
        Text > Nhập: < /Text> <
        TextInput value = { x }
        onChangeText = {
            (x) => setX(x) }
        placeholder = "x" / >
        <
        /View> <
        View style = {
            { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } } >
        <
        Text > Nhập: < /Text> <
        TextInput value = { y }
        onChangeText = {
            (y) => setY(y) }
        placeholder = "y" / >
        <
        /View> <
        Button onPress = {
            () => setTong(Number(x) + Number(y)) }
        title = "Tong" / >
        <
        Text > { tong } < /Text> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});