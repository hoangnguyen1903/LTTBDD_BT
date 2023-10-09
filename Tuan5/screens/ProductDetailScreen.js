import { Image, View, TouchableOpacity, Text } from "react-native";
import vsblue from '../assets/img/vs_blue.png'
import vsred from '../assets/img/vs_red.png'
import vssilver from '../assets/img/vs_silver.png'
import vsblack from '../assets/img/vs_black.png'
import { useState } from "react";

const ProductDetailScreen = ({navigation}) => {
    const [img, setImg] = useState(vsblue);
    const [color, setColor] = useState("xanh");

    const handleClick = (img, color) => {
        setImg(img);
        setColor(color);
    }

    return <View style={{width: '100%', height: '100%', padding: '15px'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image source={img} style={{width: '114px', height: '128px'}} />
            <View style={{paddingLeft: '10px'}}>
                <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                <Text style={{marginTop: '10px'}}>Màu: {color}</Text>
                <Text style={{marginTop: '10px'}}>Cung cấp bởi Tiki Tradding</Text>
                <Text style={{marginTop: '10px', fontWeight: 'bold', fontSize: '18px'}}>1.790.000 đ</Text>
            </View>
        </View>
        <View style={{backgroundColor: '#C4C4C4', paddingVertical: '10px', paddingHorizontal: '15px', marginTop: '10px'}}>
            <Text style={{fontSize: '18px', fontWeight: 'bold'}}>Chọn một màu bên dưới:</Text>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={() => handleClick(vssilver, 'bạc')} style={{width: '85px', height: '80px', backgroundColor: '#C5F1FB', marginTop: '10px', borderColor: '(0, 0, 0, 0.25)', borderStyle: 'solid', borderWidth: '1px'}}></TouchableOpacity>
                <TouchableOpacity onPress={() => handleClick(vsred, 'đỏ')} style={{width: '85px', height: '80px', backgroundColor: 'red', marginTop: '10px', borderColor: '(0, 0, 0, 0.25)', borderStyle: 'solid', borderWidth: '1px'}}></TouchableOpacity>
                <TouchableOpacity onPress={() => handleClick(vsblack, 'đen')} style={{width: '85px', height: '80px', backgroundColor: 'black', marginTop: '10px', borderColor: '(0, 0, 0, 0.25)', borderStyle: 'solid', borderWidth: '1px'}}></TouchableOpacity>
                <TouchableOpacity onPress={() => handleClick(vsblue, 'xanh')} style={{width: '85px', height: '80px', backgroundColor: 'blue', marginTop: '10px', borderColor: '(0, 0, 0, 0.25)', borderStyle: 'solid', borderWidth: '1px'}}></TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={{marginTop: '50px',flexDirection: 'row' ,justifyContent: 'center',paddingVertical: '15px', paddingHorizontal: '20px', borderRadius: '10px', backgroundColor: 'rgba(25, 82, 226, 0.58)'}}
                onPress={() => navigation.navigate('Product', {
                    img: img,
                })}
                >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>XONG</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default ProductDetailScreen;