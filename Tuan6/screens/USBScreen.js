import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Image, View, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const data = [
    {
        imgUrl: require('../assets/img/giacchuyen_1.png'),
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: 39,
        rating: 15
    }, 
    {
        imgUrl: require('../assets/img/daynguon_1.png'),
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: 39,
        rating: 15
    },
    {
        imgUrl: require('../assets/img/dauchuyendoipsps2_1.png'),
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: 39,
        rating: 15
    },
    {
        imgUrl: require('../assets/img/dauchuyendoi_1.png'),
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: 39,
        rating: 15
    },
    {
        imgUrl: require('../assets/img/carbusbtops2_1.png'),
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: 39,
        rating: 15
    },
    {
        imgUrl: require('../assets/img/daucam_1.png'),
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: 39,
        rating: 15
    },
]

const USBScreen = () => {
    return <View style={{width: '100%', height: '100%'}}>
        <View style={{backgroundColor: '#1BA9FF', paddingHorizontal: '15px', paddingVertical: '10px', flexDirection: 'row', alignItems: 'center'}}>
        <Icon name='arrow-left' size={24} color='white' />
            <View style={{width: 150, backgroundColor: 'white', paddingVertical: '5px', paddingHorizontal: '10px', width: 'auto', flexDirection: 'row', marginLeft: '20px'}} >
                <Icon name='search' color='black' size={24} />
                <TextInput placeholder="Dây cáp usb" style={{marginLeft: '10px' ,outlineStyle: 'none', fontSize: '18px'}} />
            </View>
            <Icon name='shopping-cart' size={24} color='white' style={{marginLeft: '10px'}} />
            <Icon name='ellipsis-h' size={24} color='white' style={{marginLeft: '10px'}} />
        </View>
        <ScrollView>
            <FlatList data={data} renderItem={({item}) => {
                return <View style={{backgroundColor: 'white', alignItems: 'center', marginVertical: '5px'}}>
                    <Image source={item.imgUrl} style={{width: '74px', height: '74px'}} />
                    <Text style={{fontSize: '18px', marginBottom: '10px'}}>{item.title}</Text>
                    <View style={{flexDirection: 'row', justifyContent: "center", alignItems: 'center'}}>
                        <Image source={require('../assets/img/star.png')} style={{width: '13px', height: '13px'}} />
                        <Image source={require('../assets/img/star.png')} style={{width: '13px', height: '13px'}} />
                        <Image source={require('../assets/img/star.png')} style={{width: '13px', height: '13px'}} />
                        <Image source={require('../assets/img/star.png')} style={{width: '13px', height: '13px'}} />
                        <Image source={require('../assets/img/star.png')} style={{width: '13px', height: '13px'}} />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: 'black', fontSize: '18px'}}>{item.price} đ</Text>
                        <Text style={{color: 'rgba(0,0,0,0.3)', fontSize: '18px', marginLeft: '15px'}}>-{item.discount}%</Text>
                    </View>
                    
                </View>
            }} />
        </ScrollView>
        <View style={{backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-around', paddingVertical: '15px'}}>
            <Icon name='bars' size={24} />
            <Icon name='home' size={24} />
            <Icon name='undo' size={24} />
        </View>
    </View>
}

export default USBScreen;