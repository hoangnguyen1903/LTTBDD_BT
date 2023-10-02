import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const LoginScreen = () => {
    return <View style = { styles.container } >
        <
        View style = {
            { alignItems: 'center', marginTop: '60px' } } >
        <
        Text style = {
            { fontWeight: 'bold', fontSize: '24px' } } > LOGIN < /Text> <
        /View> <
        View style = {
            { marginTop: '40px', backgroundColor: 'rgba(255,255,255,0.3)', flexDirection: 'row', alignItems: 'center', paddingVertical: '10px', paddingLeft: '15px' } } >
        <
        Icon name = 'user'
    size = '18px'
    style = {
        { paddingRight: '10px' } }
    /> <
    TextInput placeholder = 'Name' / >
        <
        /View> <
        View style = {
            { marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.3)', flexDirection: 'row', alignItems: 'center', paddingVertical: '10px', paddingLeft: '15px' } } >
        <
        Icon name = 'lock'
    size = '18px'
    style = {
        { paddingRight: '10px' } }
    /> <
    TextInput placeholder = 'Password' / >
        <
        Icon name = 'eye'
    size = '18px'
    style = {
        { marginLeft: 'auto', paddingRight: '15px' } }
    /> <
    /View> <
    Button title = 'LOGIN' / >
        <
        Text > Forgot yout password ? < /Text> <
        /View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0c201',
        paddingHorizontal: '15px',
        width: '100%',
        height: '100%'
    }
})

export default LoginScreen;