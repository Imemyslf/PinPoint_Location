import { View, Text, StyleSheet, Image, TextInput } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/body_suit/body_suit.png")} style={styles.image} />
      <Image source={require("../../assets/images/body_suit/body_suit.png")} style={styles.image} />
      <TextInput placeholder="Type here" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    height: "40%",
    borderRadius: 10,
    resizeMode: "contain", // Ensures the whole image fits inside the box
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});
