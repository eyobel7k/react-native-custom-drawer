import { View, Text, ScrollView, TouchableOpacity, ImageBackground, } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
       <ScrollView style={{padding:20}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                <Text style={{fontSize:18}}>Hello John Doe</Text>
                <TouchableOpacity 
                onPress={()=>{navigation.openDrawer()}}
                >
                   <ImageBackground source={require("../../assets/user-profile.jpg")} 
                   style={{width:35, height:35}}
                   imageStyle={{borderRadius:25}}/>
                </TouchableOpacity>
            </View>
       </ScrollView>
    )
};

export default HomeScreen;