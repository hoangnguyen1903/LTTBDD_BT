import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Image, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const data = [
    {
        imgUrl: require('../assets/img/ca_nau_lau.png'),
        title: 'Ca nấu lẩu, nấu mì mini',
        shopName: 'Devang'
    }, 
    {
        imgUrl: require('../assets/img/ga_bo_toi.png'),
        title: '1KG khô gà bơ tỏi',
        shopName: 'LTD Food'
    },
    {
        imgUrl: require('../assets/img/xa_can_cau.png'),
        title: 'Xe cần cẩu đa năng',
        shopName: 'Thế giới đồ chơi'
    },
    {
        imgUrl: require('../assets/img/do_choi_dang_mo_hinh.png'),
        title: 'Đồ chơi dạng mô hình',
        shopName: 'Thế giới đồ chơi'
    },
    {
        imgUrl: require('../assets/img/lanh_dao_gian_don.png'),
        title: 'Lãnh đạo giản đơn',
        shopName: 'Minh Long Book'
    },
    {
        imgUrl: require('../assets/img/hieu_long_con_tre.png'),
        title: 'Hiếu lòng con trẻ',
        shopName: 'Minh Long Book'
    },
    {
        imgUrl: require('../assets/img/trump_1.png'),
        title: 'Hiếu lòng con trẻ',
        shopName: 'Devang'
    }
]

const ProductScreen = ({route, navigation}) => {
    return <View style={{width: '100%', height: '100%'}}>
        <View style={{backgroundColor: '#1BA9FF', paddingHorizontal: '15px', paddingVertical: '10px', flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='arrow-left' size={24} color='white' />
            <Text style={{color: 'white', marginLeft: 'auto', marginRight: 'auto', fontSize: '18px'}}>Chat</Text>
            <Icon name='shopping-cart' size={24} color='white' />
        </View>
        <ScrollView>
            <Text style={{paddingHorizontal: '20px', paddingVertical: '10px', fontSize: '18px'}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
            <FlatList data={data} renderItem={({item}) => {
                return <View style={{backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', marginVertical: '5px'}}>
                    <Image source={item.imgUrl} style={{width: '74px', height: '74px'}} />
                    <View style={{marginLeft: '15px'}}>
                        <Text style={{fontSize: '18px', marginBottom: '10px'}}>{item.title}</Text>
                        <Text style={{color: 'red', fontSize: '18px'}}>Shop {item.shopName}</Text>
                    </View>
                    <TouchableOpacity style={{marginLeft: 'auto', marginRight: '10px' ,backgroundColor: 'red', paddingHorizontal: '20px', paddingVertical: '10px'}}>
                        <Text style={{color: 'white', fontSize: '18px'}}>Chat</Text>
                    </TouchableOpacity>
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

export default ProductScreen;