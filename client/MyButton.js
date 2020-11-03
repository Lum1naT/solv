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

function MyButton(props) {


    const styles = StyleSheet.create({
        button: {
            backgroundColor: props.bgcolor,
            padding: 10,
            marginBottom: 10,
            
        }
    })

    return(
        <TouchableOpacity style={styles.button}>
            <Text>
            { hexToRgb("#FFFFFF") }
            { hexToInt("FF") }
            </Text>
            
        </TouchableOpacity>
    )
}

export default MyButton;