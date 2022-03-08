import React from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "./Styles";

export default function Inputs({ setName, setLastName, setStreet, setNumber, setDistrict, setCity }) {
    return (
        <View style={Styles.viewMain}>
            <Text style={Styles.captions}>Nome:</Text>
            <TextInput onChangeText={text => setName(text)} style={Styles.inputs} />
            <Text style={Styles.captions}>Sobrenome:</Text>
            <TextInput onChangeText={text => setLastName(text)} style={Styles.inputs} />
            <Text style={Styles.captions}>Rua:</Text>
            <TextInput onChangeText={text => setStreet(text)} style={Styles.inputs} />
            <Text style={Styles.captions}>Número:</Text>
            <TextInput onChangeText={text => setNumber(text)} style={Styles.inputs} />
            <Text style={Styles.captions}>Bairro:</Text>
            <TextInput onChangeText={text => setDistrict(text)} style={Styles.inputs} />
            <Text style={Styles.captions}>Cidade:</Text>
            <TextInput onChangeText={text => setCity(text)} style={Styles.inputs} />
        </View>
    );
};
