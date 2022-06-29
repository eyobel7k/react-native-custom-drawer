import { NavigationContainer } from "@react-navigation/native";
import { View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const OnboardingScreen = ({navigation}) => {
    return (
        <SafeAreaView
            style = {{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF",
            }}
        >
            <View style = {{ marginTop: 20}}>
                <TouchableOpacity
                    style = {{
                        backgroundColor: "#AD40AF",
                        padding: 20,
                        maxWidth: "90%",
                        borderRadius: 10,
                        marginBottom: 50,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                    onPress = {() => navigation.navigate('Home')}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            // fontFamily: 'Roboto-MediumItalic',
                        }}>
                        Let's Begin
                    </Text>
                    <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
                </TouchableOpacity>
            </View>            
        </SafeAreaView>
    )
};

export default OnboardingScreen;