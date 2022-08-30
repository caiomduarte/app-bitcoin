
import React, {useState} from "react";

//Importando o arquivo api.js
import api from "../services/api";

import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){

    //Declarando a variavel
    let [bitcoin, setBitcoin] = useState(0);

    async function CalcularPreco() {
        const resposta = await api.get('ticker');

        console.log(resposta);
       
        let valor = resposta.data.BRL['buy'];
        
        setBitcoin(valor);
     
        alert('Valor atualizado!')
    }


    return(
        <View style={styles.container}>
            <Image source={require('../../assets/bitcoin.png')} 
                 style={{width:450,height:169}}
                 resizeMode="center"            
            />

            <Text style={styles.textoBitcoin}>Preço atual</Text>
            <Text style={styles.textoBitcoin}>R$ {bitcoin}</Text>

            <TouchableOpacity style={styles.botao} onPress={CalcularPreco}>
                <Text style={styles.textoBotao}>Atualizar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        alignItems:'center',
        justifyContent: 'center'
    },

    textoBitcoin:{
        fontSize:32,
        color:'#363636'
    },

    botao:{
        backgroundColor: '#FFA500',
        marginTop:50,
        width:300,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },

    textoBotao:{
        fontSize:32,
        color:'#FFF'
    }
    
});