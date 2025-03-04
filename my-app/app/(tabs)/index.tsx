import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";

function Circle({ text, top, left, size, isActive }) {
  return (
    <View
      style={{
        position: "absolute",
        top: top,
        left: left,
        backgroundColor: isActive ? "green" : "gray", // Change color based on input
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size / 2,
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text>
    </View>
  );
}

export default function Tab() {
  const [input, setInput] = useState("00000000"); // Default 8-bit string

  // Ensure input is exactly 8 characters and consists of only 0s and 1s
  const handleInputChange = (text) => {
      setInput(text); // Auto-fills with '0' if not complete
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ position: "relative", width: 200, height: 320 }}>
          <Image source={require("../../assets/images/body_suit/body_suit.png")} style={styles.image} />

          {/* Circles mapped to input string */}
          <Circle text="A" top="35%" left="25%" size={32} isActive={input[0] === "1"} />
          <Circle text="B" top="35%" left="55%" size={32} isActive={input[1] === "1"} />
          <Circle text="C" top="80%" left="25%" size={32} isActive={input[2] === "1"} />
          <Circle text="D" top="80%" left="55%" size={32} isActive={input[3] === "1"} />
          <Circle text="E" top="80%" left="0%" size={24} isActive={input[4] === "1"} />
          <Circle text="F" top="80%" left="90%" size={24} isActive={input[5] === "1"} />
        </View>

        <View style={{ position: "relative", width: 200, height: 320 }}>
          <Image source={require("../../assets/images/body_suit/body_suit.png")} style={styles.image} />
          <Circle text="G" top="35%" left="25%" size={32} isActive={input[6] === "1"} />
          <Circle text="H" top="35%" left="55%" size={32} isActive={input[7] === "1"} />
        </View>

        <TextInput
          placeholder="Enter 8-bit string (e.g., 10110000)"
          style={styles.input}
          value={input}
          onChangeText={handleInputChange}
          keyboardType="numeric"
          maxLength={8}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    textAlign: "center",
  },
});
