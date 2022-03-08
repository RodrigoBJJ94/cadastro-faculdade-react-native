import React, { useState } from "react";
import { View } from "react-native";
import Statusbar from "./components/Statusbar/Statusbar";
import Title from "./components/Title/Title";
import Inputs from "./components/Inputs/Inputs";
import RadioButtons from "./components/RadioButtons/RadioButtons";
import Date from "./components/Date/Date";
import Finish from "./components/Finish/Finish";
import Styles from "./Styles";

export default function App() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");

  return (
    <View style={Styles.app}>
      <Statusbar />
      <Title />
      <Inputs setName={setName} setLastName={setLastName} setStreet={setStreet}
        setNumber={setNumber} setDistrict={setDistrict} setCity={setCity} />
      <RadioButtons />
      <Date />
      <Finish name={name} lastname={lastname} street={street}
        number={number} district={district} city={city} />
    </View>
  );
};
