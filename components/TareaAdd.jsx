import { View, StyleSheet, TextInput } from "react-native";
import BotonAdd from "./Botones/BotonAdd";

function TareaAdd({
  placeHolderInput,
  placeHolderColor,
  titleBtn,
  colorBtn,
  funcionAdd,
  funcionInput,
  tareaAgregada,
}) {
  const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 50,
      marginBottom: 20,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },

    input: {
      width: "75%",
      color: "#0471A6",
      borderBottomColor: "#0471A6",
      borderBottomWidth: 1,
      height: 45,
      marginBottom: 5,
    },
  });

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeHolderInput}
        placeholderTextColor={placeHolderColor}
        onChangeText={(value) => funcionInput(value)}
      />

      <BotonAdd
        title={titleBtn}
        onPress={() => funcionAdd(tareaAgregada)}
        color={colorBtn}
      />
    </View>
  );
}

export default TareaAdd;
