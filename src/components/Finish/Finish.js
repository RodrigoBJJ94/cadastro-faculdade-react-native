import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import Styles from "./Styles";

export default function Finish({ name, lastname, street, number, district, city }) {

    function finish() {
        if (name !== "" && lastname !== "" && street !== "" && number !== "" && district !== "" && city !== "") {
            Alert.alert("Cadastro concluído!");
        } else {
            Alert.alert("Favor preencher todos os dados!");
        };
    };

    return (
        <View style={Styles.viewFinish}>
            <TouchableOpacity onPress={() => finish()} style={Styles.buttonFinish}>
                <Text style={Styles.finish}>Concluir Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
};
