import { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Pressable,
  useColorScheme,
} from "react-native";

import data from "./data/injuries.json";

export default function App() {
  const [injury, setInjury] = useState({
    injuryType: "",
    injuryEffect: "",
    treatment: "",
    effect: "",
    rest_time: "",
  });

  const colorScheme = useColorScheme();

  const textColor =
    colorScheme === "light" ? styles.lightText : styles.darkText;
  const bgColor =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const handleRandomInjury = () => {
    const randomInjuryType =
      data.injuries[Math.floor(Math.random() * data.injuries.length)];
    const randomInjuryEffects =
      data.injury_type[Math.floor(Math.random() * data.injury_type.length)];

    if (randomInjuryType === "Grenade concussion") {
      setInjury({
        injuryType: randomInjuryType,
        injuryEffect: {
          rest_time: "30 seconds",
          effect: "HANDS ON EARS!!",
        },
      });
    } else {
      setInjury({
        injuryType: randomInjuryType,
        injuryEffect: randomInjuryEffects,
      });
    }
  };

  return (
    <View style={[styles.container, bgColor]}>
      {injury.injuryType && (
        <Text style={[styles.text, textColor]}>
          Body part: {injury.injuryType}
        </Text>
      )}
      {injury.injuryEffect.type && (
        <Text style={[styles.text, textColor]}>
          Type: {injury.injuryEffect.type}
        </Text>
      )}
      {injury.injuryEffect.treatment && (
        <Text style={[styles.text, textColor]}>
          Treatment: {injury.injuryEffect.treatment}
        </Text>
      )}
      {injury.injuryEffect.effect && (
        <Text style={[styles.text, textColor]}>
          {" "}
          {injury.injuryEffect.effect}
        </Text>
      )}
      {injury.injuryEffect.rest_time && (
        <Text style={[styles.text, textColor]}>
          Rest time: {injury.injuryEffect.rest_time}
        </Text>
      )}
      <Pressable style={[styles.button, bgColor]} onPress={handleRandomInjury}>
        <Text style={[styles.buttonText, textColor]}>New injury</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightText: {
    color: "#242c40",
  },
  darkText: {
    color: "#d0d0c0",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 22,
    paddingHorizontal: 42,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  textInjury: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginBottom: 16,
  },
  text: {
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
