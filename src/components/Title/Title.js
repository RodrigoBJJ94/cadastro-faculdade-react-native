import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

export default function Title() {
    return (
        <View style={Styles.viewTitle}>
            <Text style={Styles.title}>Cadastro</Text>
        </View>
    );
};
