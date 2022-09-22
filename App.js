import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import TareaDeleteContainer from "./components/Botones/BotonesContainer/TareaDeleteContainer";
import TareaAddContainer from "./components/Botones/BotonesContainer/TareaAddContainer";
import ModalDeleteTask from "./components/Modal/ModalDeleteTask";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});

export default function App() {
  const [tarea, setTarea] = useState("");
  const [arrTareas, setArrTareas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemTask, setItemTask] = useState({});

  /* Funcion para capturar el texto del input y setearlo en la TAREA */
  const inputTask = (value) => {
    setTarea(value);
  };

  /* Funcion para agregar tarea, agarra TAREA y setea el ARRTAREAS con esa tarea y un ID en forma de OBJ */
  const addTask = (value) => {
    setArrTareas([...arrTareas, { id: Date.now(), value: value }]);
  };

  /* Funcion para borrar la tarea, se le pasa un ID de la tarea, filtra en el ARRTAREAS para sacarlo y lo setea nuevamente sin ese OBJ */
  const funcionDelete = (id) => {
    setArrTareas(arrTareas.filter((item) => item.id !== id));
  };

  const handleModalOn = ()=>{
    setIsModalOpen(true);
  }

  return (
    <>
      
      <View style={styles.container}>

        {/* INPUT TAREA + BTN ADD */}
        <TareaAddContainer
          addTask={addTask}
          inputTask={inputTask}
          tareaAgregada={tarea}
        />

        {/* LISTADO DE TAREAS */}
        {/* Se utiliza el FLATLIST PARA RENDERIZAR TODOS LOS ELEMENTOS ITERABLES FUNCIONA COMO MAP */}
        <FlatList
          data={arrTareas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TareaDeleteContainer
              item={item}
              setArrTareas={setArrTareas}
              setItemTask={setItemTask}
              handleModalOn={handleModalOn}
            />
          )}
        />
        
        <ModalDeleteTask
          itemTask={itemTask}
          funcionDelete={funcionDelete}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </View>
    </>
  );
}
