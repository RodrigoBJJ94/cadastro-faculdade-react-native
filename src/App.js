import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import DateTimePicker from "react-native-modal-datetime-picker";

const radioButtonsData = [{
  id: '1',
  label: 'Masculino',
  value: 'option1'
}, {
  id: '2',
  label: 'Feminino',
  value: 'option2'
}];

export default function App() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [dateVisible, setDateVisible] = useState(false);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  };

  function showDate() {
    setDateVisible(true);
  };

  function hideDate() {
    setDateVisible(false);
  };

  function confirmDate() {
    showDate();
  };

  function finish() {
    if (name !== "" && lastname !== "" && street !== "" && number !== "" && district !== "" && city !== "") {
      Alert.alert("Cadastro concluído!");
    } else {
      Alert.alert("Favor preencher todos os dados!");
    };
  };

  return (
    <View style={Styles.app}>
      <View style={Styles.viewTitle}>
        <Text style={Styles.title}>Cadastro</Text>
      </View>
      <View style={Styles.viewMain}>
        <Text style={Styles.captions}>Nome</Text>
        <TextInput onChangeText={text => setName(text)} style={Styles.inputs} />
        <Text style={Styles.captions}>Sobrenome</Text>
        <TextInput onChangeText={text => setLastName(text)} style={Styles.inputs} />
        <Text style={Styles.captions}>Rua</Text>
        <TextInput onChangeText={text => setStreet(text)} style={Styles.inputs} />
        <Text style={Styles.captions}>Número</Text>
        <TextInput onChangeText={text => setNumber(text)} style={Styles.inputs} />
        <Text style={Styles.captions}>Bairro</Text>
        <TextInput onChangeText={text => setDistrict(text)} style={Styles.inputs} />
        <Text style={Styles.captions}>Cidade</Text>
        <TextInput onChangeText={text => setCity(text)} style={Styles.inputs} />
      </View>
      <View style={Styles.viewRadioButtons}>
        <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} style={Styles.radioButtons} />
      </View>
      <View style={Styles.viewDate}>
        <TouchableOpacity onPress={showDate} style={Styles.buttonDate}>
          <Text style={Styles.date}>Data de Nascimento</Text>
        </TouchableOpacity>
        <DateTimePicker isVisible={dateVisible} mode="date" onConfirm={confirmDate} onCancel={hideDate} />
      </View>
      <View style={Styles.viewFinish}>
        <TouchableOpacity onPress={() => finish()} style={Styles.buttonFinish}>
          <Text style={Styles.viewFinish}>Concluir Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  app: {

  },
  viewTitle: {

  },
  title: {

  },
  viewMain: {

  },
  captions: {

  },
  inputs: {

  },
  viewRadioButtons: {

  },
  radioButtons: {

  },
  viewDate: {

  },
  buttonDate: {

  },
  date: {

  },
  viewFinish: {

  },
  buttonFinish: {

  },
  finish: {

  }
});

