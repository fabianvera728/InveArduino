import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';

export const HomePage = () => {
    return (
        <View style={[styles.homePage, tw`w-full`]}>
            <View style={tw`flex flex-row w-full items-center justify-between`}>
                <Image
                    source={require('../../assets/abeho.png')}
                    style={tw`w-[134px] h-[32px]`}
                />
                <Text>Icon</Text>
            </View>
            <View style={tw`w-full mt-8 flex flex-col`}>
                <Text><strong>Cultivos</strong></Text>
                <View></View>
            </View>
            <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                <Text><strong>Imagenes recientes</strong></Text>
            </View>
        </View>
    )
}

export const NewCropPage = () => {
    return (
        <View style={[styles.newCropPage, tw`w-full`]}>
            <View style={tw`flex flex-row w-full items-center justify-between`}>
                <Text>"Icon"</Text>
                <Text>Icon</Text>
            </View>
            <View style={tw`w-full mt-8 flex flex-col`}>
                <Text style={tw`text-xl`}><strong>Crear nuevo cultivo</strong></Text>
                <Text style={tw`mt-2 text-gray-500`}>Seleccionar un tipo de cultivo permite prefilar el invernadero y sugerir parámetros de configuración por defecto</Text>
                <View style={tw`mt-4`}>
                    <label style={tw`text-gray-500`}>Tipo de cultivo</label>
                    <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="Tomates" onChangeText={(e) => console.log(e)} />
                </View>
                <View style={tw`mt-2`}>
                    <label style={tw`text-gray-500`}>Código de Arduino</label>
                    <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="Código" onChangeText={(e) => console.log(e)} />
                </View>
                <View style={tw`mt-2`}>
                    <label style={tw`text-gray-500`}>Nombre del cultivo</label>
                    <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="Nombre del cultivo" onChangeText={(e) => console.log(e)} />
                </View>
                <View style={tw`mt-2`}>
                    <label style={tw`text-gray-500`}>Descripción</label>
                    <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="Descripción" onChangeText={(e) => console.log(e)} />
                </View>
            </View>
            <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                <Text><strong>Imagenes recientes</strong></Text>
            </View>
        </View>
    )
}

export const NewCropCustomParametersPage = () => {
    return (
        <View style={[styles.newCropPage, tw`w-full`]}>
            <View style={tw`flex flex-row w-full items-center justify-between`}>
                <Text>"Icon"</Text>
                <Text>Icon</Text>
            </View>
            <View style={tw`w-full mt-8 flex flex-col`}>
                <Text style={tw`text-xl`}><strong>Personalizar parametros</strong></Text>
                <View style={tw`mt-4`}>
                    <label style={tw`text-gray-500`}><strong>Rangos de riego activo</strong></label>
                    <View style={tw`flex flex-row`}>
                        <View style={tw`mt-2 w-[50%] pr-1`}>
                            <label style={tw`text-gray-500`}>Hora de inicio</label>
                            <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                        </View>
                        <View style={tw`mt-2 w-[50%] pl-1`}>
                            <label style={tw`text-gray-500`}>Hora de fin</label>
                            <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                        </View>
                    </View>
                </View>
                <View style={tw`mt-4`}>
                    <label style={tw`text-gray-500`}><strong>Rangos de iluminación activa</strong></label>
                    <View style={tw`flex flex-row`}>
                        <View style={tw`mt-2 w-[50%] pr-1`}>
                            <label style={tw`text-gray-500`}>Hora de inicio</label>
                            <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                        </View>
                        <View style={tw`mt-2 w-[50%] pl-1`}>
                            <label style={tw`text-gray-500`}>Hora de fin</label>
                            <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                        </View>
                    </View>
                </View>
                <View style={tw`mt-4`}>
                    <label style={tw`text-gray-500`}><strong>Horario de toma fotográfica</strong></label>
                    <TextInput style={tw`border mt-3 border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                    <TextInput style={tw`border mt-3 border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                </View>
                <View style={tw`mt-4`}>
                    <label style={tw`text-gray-500`}><strong>Rango de temperatura permitido</strong></label>
                    <input type="range" />
                </View>
                <View style={tw`mt-4`}>
                    <label style={tw`text-gray-500`}><strong>Rango de consumo eléctrico permitido</strong></label>
                    <input type="range" />
                </View>
            </View>
            <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                <Text><strong>Imagenes recientes</strong></Text>
            </View>
        </View>
    )
}


export const StatisticsPage = () => {
    return (
        <View style={[styles.newCropPage, tw`w-full`]}>
            <View style={tw`flex flex-row w-full items-center justify-between`}>
                <Text>"Icon"</Text>
                <Text>Icon</Text>
            </View>
            <View style={tw`w-full mt-8 flex flex-col`}>
                <Text style={tw`text-xl`}><strong>Visualización de estadísticas</strong></Text>
                <Text style={tw`mt-2 text-gray-500`}>Juegue con el tipo de gráfico y el rango de fechas para obtener una mejor perspectiva</Text>
                <View style={tw`mt-4`}>
                    <label style={tw`text-gray-500`}><strong>Parámetro a observar</strong></label>
                    <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="Humedad del suelo" onChangeText={(e) => console.log(e)} />
                </View>
                <View style={tw`mt-4`}>
                </View>
            </View>
            <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                <Text><strong>Imagenes recientes</strong></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        alignContent: "center",
        alignItems: "flex-start",
        paddingVertical: "0rem"
    },
    newCropPage: {
        flex: 1,
        alignContent: "center",
        alignItems: "flex-start",
        paddingVertical: "0rem"
    },
    text: {
        backgroundColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    }
});

