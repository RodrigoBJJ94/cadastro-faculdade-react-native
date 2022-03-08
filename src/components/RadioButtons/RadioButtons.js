import React, { useState } from "react";
import { View } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import Styles from "./Styles";

const radioButtonsData = [{
    id: '1',
    label: 'Masculino',
    labelStyle: { fontSize: 20, color: "#000000" },
    color: "#157555",
    size: 25,
}, {
    id: '2',
    label: 'Feminino',
    labelStyle: { fontSize: 20, color: "#000000" },
    color: "#157555",
    size: 25,
}];

export default function RadioButtons() {
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    };

    return (
        <View style={Styles.viewRadioButtons}>
            <RadioGroup radioButtons={radioButtons}
                onPress={onPressRadioButton} layout="row" />
        </View>
    );
};
