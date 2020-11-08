import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

import hexToLumi from '../func/colorConvertor';

    


const component = (props) => {

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
    });


    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
            I am always visible
            </Text>
            
        </TouchableOpacity>
    )
}

export default MyButton;