import { StyleSheet, View, TextInput, Text, FlatList } from "react-native";
import { useState } from "react";
import BotonAdd from "./components/Botones/BotonAdd";
import TareaDeleteContainer from "./components/Botones/BotonesContainer/TareaDeleteContainer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

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

  containerTask: {
    marginBottom: 20,
    marginHorizontal: 20,
  },

  textTask: {
    backgroundColor: "white",
    marginTop: 0,
    marginVertical: 10,
    justifyContent: "space-between",
    width: "100%",
  },
});

export default function App() {
  const [tarea, setTarea] = useState("");
  /* const [tareaAgregada, setTareaAgregada] = useState(""); */
  const [arrTareas, setArrTareas] = useState([]);

  const inputTask = (value) => {
    setTarea(value);
  };

  const addTask = (value) => {
    setArrTareas([...arrTareas, 
      { id: Date.now(),
        value: value
      }]);
  };

  const funcionDelete = (id) => {
    console.warn("borre la tarea")
}

  return (
    <>
      {/* INPUT + BTN ADD */}
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New task"
            placeholderTextColor={"#0471A6"}
            onChangeText={inputTask}
          />
          <BotonAdd
            title={"ADD"}
            onPress={() => {
              addTask(tarea);
            }}
            color={"#0471A6"}
          />
        </View>
        {/* LISTADO DE TAREAS */}
        {console.warn(arrTareas)}
            <FlatList
            data={arrTareas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index})=>
            <TareaDeleteContainer 
              item={item}
              setArrTareas={setArrTareas}
              fn={funcionDelete}
            />}
            />
      </View>
    </>
  );
}
