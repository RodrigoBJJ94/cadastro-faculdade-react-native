import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Styles from "./Styles";

export default function Date() {
    const [dateVisible, setDateVisible] = useState(false);

    function showDate() {
        setDateVisible(true);
    };

    function hideDate() {
        setDateVisible(false);
    };

    function confirmDate() {
        showDate();
    };

    return (
        <View style={Styles.viewDate}>
            <TouchableOpacity onPress={showDate} style={Styles.buttonDate}>
                <Text style={Styles.date}>Data de Nascimento</Text>
            </TouchableOpacity>
            <DateTimePicker isVisible={dateVisible} mode="date"
                onConfirm={confirmDate} onCancel={hideDate} />
        </View>
    );
};
