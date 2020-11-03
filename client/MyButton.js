import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function hexToInt(hex){
    var str = parseInt(hex, 16);
    return str;

}

function hexToRgb(hex){
    // expecting #6digit format
    var sub = hex.substring(1, 7)
    var r = hexToInt(sub.substring(0, 2))
    var g = hexToInt(sub.substring(2, 4))
    var b = hexToInt(sub.substring(4, 6))
   
    var res = "(" + r + ", " + g + ", " + b + ')';
    
    return res;
}

function hexToLumi(hex){
    var sub = hex.substring(1, 7)
    var r = hexToInt(sub.substring(0, 2))
    var g = hexToInt(sub.substring(2, 4))
    var b = hexToInt(sub.substring(4, 6))

    var res = r * 0.2126 + g * 0.7152 + b * 0.0722

    return res;
}


function MyButton(props) {

    var textColor = '';

    if (hexToLumi(props.bgcolor) > 126) {
        textColor = '#000000';    
    
    } else {

        textColor = '#FFFFFF';

    }


    const styles = StyleSheet.create({
        button: {
            backgroundColor: props.bgcolor,
            padding: 10,
            marginBottom: 10,
            
        },

        text: {
            color: textColor,
        }
    })

    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
            I am always visible
            </Text>
            
        </TouchableOpacity>
    )
}

export default MyButton;