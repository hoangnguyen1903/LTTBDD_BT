import { TextInput, TouchableOpacity, View } from "react-native";

const Screen4 = () => {
    return <View style={{width: '100%', height: '100%', marginHorizontal: '15px'}}>
        <Text>Welcome, Jala</Text>
        <Text>Choice you Best food</Text>
        <TextInput placeholder="Search food" style={{outlineStyle: 'none', borderWidth: '1px', borderColor: 'rgba(0,0,0,0.3)', borderStyle: 'solid', paddingHorizontal: '10px', paddingVertical: '10px'}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}} >
            <TouchableOpacity style={{paddingHorizontal: '20px', paddingVertical: '10px', backgroundColor: 'yellow', borderRadius: '5px'}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>Donut</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: '20px', paddingVertical: '10px', backgroundColor: 'yellow', borderRadius: '5px'}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>Donut</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: '20px', paddingVertical: '10px', backgroundColor: 'yellow', borderRadius: '5px'}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>Donut</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Screen4;