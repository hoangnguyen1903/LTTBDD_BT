import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Image, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

// const data = [
//     {
//         imgUrl: require('../assets/img/ca_nau_lau.png'),
//         title: 'Ca nấu lẩu, nấu mì mini',
//         shopName: 'Devang'
//     },
//     {
//         imgUrl: require('../assets/img/ga_bo_toi.png'),
//         title: '1KG khô gà bơ tỏi',
//         shopName: 'LTD Food'
//     },
//     {
//         imgUrl: require('../assets/img/xa_can_cau.png'),
//         title: 'Xe cần cẩu đa năng',
//         shopName: 'Thế giới đồ chơi'
//     },
//     {
//         imgUrl: require('../assets/img/do_choi_dang_mo_hinh.png'),
//         title: 'Đồ chơi dạng mô hình',
//         shopName: 'Thế giới đồ chơi'
//     },
//     {
//         imgUrl: require('../assets/img/lanh_dao_gian_don.png'),
//         title: 'Lãnh đạo giản đơn',
//         shopName: 'Minh Long Book'
//     },
//     {
//         imgUrl: require('../assets/img/hieu_long_con_tre.png'),
//         title: 'Hiếu lòng con trẻ',
//         shopName: 'Minh Long Book'
//     },
//     {
//         imgUrl: require('../assets/img/trump_1.png'),
//         title: 'Hiếu lòng con trẻ',
//         shopName: 'Devang'
//     }
// ]

const Screen1 = ({ navigation }) => {
    return <View style={{ width: '100%', height: '100%' }}>
        <Image source={require('../assets/img/letter.png')} style={{width: '200px', height: '200px', marginHorizontal: 'auto', marginTop: '30px'}} />
        <Text style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', marginTop: '30px'}}>Manage your task</Text>
        <View style={{flexDirection: "row", alignItems: 'center', paddingHorizontal: '15px', paddingVertical: '10px', borderWidth: '1px', borderStyle: 'solid', marginTop: '40px', marginHorizontal: '15px'}}>
            <Icon name="envelope" size={24} color="black" />
            <TextInput placeholder="Enter your name" placeholderTextColor="rgba(0,0,0,0.3)" style={{outlineStyle: "none", marginLeft: '10px'}} />
        </View>
        <TouchableOpacity 
            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,backgroundColor: 'cyan', borderRadius: '10px', paddingVertical: '10px', paddingHorizontal: '15px', marginTop: '80px',  marginHorizontal: 'auto'}}
            onPress={() => navigation.navigate("Screen2")}
            >
            <Text style={{color: 'white', fontSize: '24px', textAlign: 'center', textTransform: 'uppercase', marginRight: '10px'}}>get started</Text>
            <Icon name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
    </View>
}

export default Screen1;