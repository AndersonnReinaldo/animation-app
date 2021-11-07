import React,{ useEffect, useRef } from 'react'
import { StyleSheet, Text, View,Animated } from 'react-native'

const index = () => {

    const larAnimada = useRef(new Animated.Value(0)).current;
    const altAnimada = useRef(new Animated.Value(50)).current;
    const opacidadeAnimada = useRef(new Animated.Value(1)).current;


    useEffect(()=> {

   

        Animated.sequence([
            Animated.timing(larAnimada,{
                toValue:300,
                duration:4000,
                useNativeDriver:false
            }),
            Animated.timing(altAnimada, {
                toValue:100,
                duration: 4000,
                useNativeDriver:false
            })
        ]).start(({finished}) => {alert('Animacao finalizada!')});
       

    },[])

    let porcentagemLargura = larAnimada.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%']
    }
    )

    let porcentagemAltura = altAnimada.interpolate({
        inputRange: [50, 100],
        outputRange: ['5%', '100%']
    }
    )
    return (
        <View style={styles.container}>

            <Animated.View 
            
            
            style={{
                width: porcentagemLargura,
                height: porcentagemAltura,
                opacity:opacidadeAnimada,
                backgroundColor:'#4169E1',
                justifyContent:'center',
            }}>

            </Animated.View>

        </View>
    )
}

export default index

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})
