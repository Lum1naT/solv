import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Navbar } from 'react-bootstrap';

import hexToLumi from '../func/colorConvertor';

    


const MainNavbar = (props) => {

   
    return(
        

        <Navbar>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default MainNavbar;