import React,{useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Animateble from 'react-native-animatable';

    const ButtonAnimated = Animateble.createAnimatableComponent(TouchableOpacity);


const Index = () => {

    const buttonRef = useRef();


    function handleClick(){

        buttonRef.current.shake()
    }

    return (
        <View style={styles.container}>
            <Animateble.Text
             style={styles.title}
             animation='shake'
            //  iterationCount={'infinite'}
            // duration={5000}
             >Anderson Reinaldo</Animateble.Text>

             <ButtonAnimated 
                style={styles.button}
                animation='pulse'
                ref={buttonRef}
                onPress={handleClick}
                >
                 <Text style={{color:'#FFF'}}>Animar</Text>
             </ButtonAnimated>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:25,
        textAlign:'center'
    },
    button:{
        width:'70%',
        height:30,
        backgroundColor:'#121212',
        justifyContent:'center',
        alignItems:'center',
        marginTop:25
    }
})
