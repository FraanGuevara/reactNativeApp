import { Text, StyleSheet, View } from "react-native";
import BotonAdd from "./BotonAdd";

function TareaDelete({ tarea, titleBtn, color, id, funcionDelete }) {
  const styles = StyleSheet.create({
    cuerpoTask: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
    },
    textTask: {
      backgroundColor: "white",
      marginTop: 0,
      marginVertical: 10,
      justifyContent: "space-between",
      width: "60%",
      color: "black",
    },
  });

  return (
    <View key={1} style={styles.cuerpoTask}>
      <Text style={styles.textTask}>{tarea}</Text>
      <BotonAdd
        title={titleBtn}
        onPress={() => funcionDelete(id)}
        color={color}
      />
    </View>
  );
}

export default TareaDelete;
