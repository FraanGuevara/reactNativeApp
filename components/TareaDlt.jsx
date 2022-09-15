import { Text, StyleSheet, View } from "react-native"
import { useState, useEffect } from "react"
import BotonAdd from "./BotonAdd"


function TareaDlt({ arrTareas }) {

    const [tareas, setTareas] = useState([]);

    const styles = StyleSheet.create({
        textTask: {
            backgroundColor: 'white',
            marginTop: 0,
            marginVertical: 10,
            justifyContent: 'space-between',
            width: '100%'
        }
    })

    const fnDlt = () => {

    }

    useEffect(() => {
        setTareas(arrTareas)
    }, [arrTareas])



    return (
        tareas.map((task) => {
            <View>
                <Text style={styles.textTask}>
                    {task}
                    <BotonAdd
                        title={"Delete"}
                        onPress={fnDlt}
                        color={"red"} />
                </Text>
            </View>
            console.warn(tareas);
        })
    )
}

export default TareaDlt;