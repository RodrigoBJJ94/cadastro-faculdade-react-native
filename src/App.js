import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import DateTimePicker from "react-native-modal-datetime-picker";

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
      <StatusBar backgroundColor="#20083d" />
      <View style={Styles.viewTitle}>
        <Text style={Styles.title}>Cadastro</Text>
      </View>
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
      <View style={Styles.viewRadioButtons}>
        <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} layout="row" />
      </View>
      <View style={Styles.viewDate}>
        <TouchableOpacity onPress={showDate} style={Styles.buttonDate}>
          <Text style={Styles.date}>Data de Nascimento</Text>
        </TouchableOpacity>
        <DateTimePicker isVisible={dateVisible} mode="date" onConfirm={confirmDate} onCancel={hideDate} />
      </View>
      <View style={Styles.viewFinish}>
        <TouchableOpacity onPress={() => finish()} style={Styles.buttonFinish}>
          <Text style={Styles.finish}>Concluir Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  viewTitle: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },
  viewMain: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  captions: {
    fontSize: 18,
    color: "#000000",
    marginBottom: 6,
  },
  inputs: {
    backgroundColor: "#157555",
    fontSize: 18,
    paddingLeft: 10,
    marginBottom: 6,
    borderRadius: 5,
  },
  viewRadioButtons: {
    alignItems: "center",
    marginTop: 10,
  },
  viewDate: {
    backgroundColor: "#157555",
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonDate: {
    height: 40,
    justifyContent: "center",
  },
  date: {
    color: "#ffffff",
    fontSize: 18,
    alignSelf: "center",
  },
  viewFinish: {
    backgroundColor: "#20083d",
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonFinish: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  finish: {
    color: "#ffffff",
    fontSize: 22,
  }
});
