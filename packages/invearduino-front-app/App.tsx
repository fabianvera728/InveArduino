import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { HomePage, NewCropCustomParametersPage, NewCropPage, StatisticsPage } from './src/pages/Home';
import { LoginPage } from './src/pages/Login';


export function WelcomePage() {
    return (
        <View style={styles.welcomePage}>
            <View></View>
            <Image
                source={require('./assets/logo.png')}
                style={tw`w-48 h-29`}
            />
            <View style={[styles.footer]}>
                <Text>Power by</Text>
                <Text><strong>WeTheDevs</strong></Text>
            </View>
        </View>
    )
}



export default function App() {
    return (
        <View style={styles.container}>
            {/* <WelcomePage /> */}
            {/* <LoginPage /> */}
            {/* <HomePage /> */}
            {/* <NewCropPage />*/}
            {/* <NewCropCustomParametersPage />*/}
            <StatisticsPage />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        paddingHorizontal: "2rem",
        paddingVertical: "2rem"
    },
    welcomePage: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "14rem",
        paddingVertical: "2rem"
    },
    footer: {
        alignContent: "flex-end",
        alignItems: "center",
    },
    text: {
        backgroundColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    }
});
