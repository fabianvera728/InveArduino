import { Button, Image, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export const LoginPage = () => {
    return (
        <View style={[styles.loginPage, tw`w-full`]}>
            <View>
                <Text>Bienvenido a</Text>
                <Image
                    source={require('../../assets/abeho.png')}
                    style={tw`w-[134px] mt-2 h-[32px]`}
                />
            </View>
            <View style={tw`w-full mt-3 flex flex-col items-center`}>
                <Image
                    source={require('../../assets/brand_abeho.png')}
                    style={tw`w-[109px] h-20 `}
                />
            </View>
            <View style={tw`mt-4 w-full flex flex-col`}>
                <View style={tw`w-full mb-3 flex flex-col`}>
                    <Button
                        onPress={() => { console.log("hola mundo") }}
                        title="Iniciar sesión con Google"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <Button
                    onPress={() => { console.log("hola mundo") }}
                    title="Iniciar sesión con GitHub"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginPage: {
        flex: 1,
        alignContent: "center",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingVertical: "14rem"
    },
    text: {
        backgroundColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    }
});

