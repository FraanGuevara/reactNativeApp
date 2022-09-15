import { StyleSheet, View, TextInput} from 'react-native';
import { useState } from 'react';
import BotonAdd from './components/BotonAdd';
import TareaDlt from './components/TareaDlt';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  inputContainer:{
    marginTop:50,
    marginBottom:20,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent: 'space-between'
  },

  input:{
    width:'75%',
    color:'#0471A6',
    borderBottomColor: "#0471A6",
    borderBottomWidth: 1,
    height:45,
    marginBottom:5,
  },

  containerTask: {
    marginBottom:20,
    marginHorizontal:20,
  },

  textTask: {
    backgroundColor:'white',
    marginTop:0,
    marginVertical:10,
    justifyContent:'space-between',
    width:'100%'
  }

});


export default function App() {

const [tarea, setTarea] = useState("");
const [tareaAgregada, setTareaAgregada] = useState("");
const [arrTareas, setArrTareas] = useState (["hh"]);

const inputTask = (value)=>{
  setTarea(value);
};

const addTask = (value)=>{
  setTareaAgregada(value);
  setArrTareas([...arrTareas, value]);
  console.warn(arrTareas)
}

/* useEffect(() => {

}, []) */


  return (
    <>
    {/* INPUT + BTN ADD */}
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
          placeholder='New task' 
          placeholderTextColor={'#0471A6'}
          onChangeText={inputTask}
          />
          <BotonAdd 
            title={"ADD"}
            onPress={()=>{addTask(tarea)}}
            color={"#0471A6"}
            />
        </View>

    {/* LISTADO DE TAREAS */}
        <TareaDlt
          arrTareas = {arrTareas}
          />
      </View>
    </>
  );
}

