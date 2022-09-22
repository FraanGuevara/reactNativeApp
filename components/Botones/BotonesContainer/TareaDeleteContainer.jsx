import React from 'react'
import { View } from 'react-native'
import TareaDelete from '../TareaDelete'

export default function TareaDeleteContainer({ item, funcionDelete, setItemTask, handleModalOn }) {

    

    return (
            <View>
                <TareaDelete
                    tarea={item.value}
                    titleBtn={"Delete"}
                    color={"red"}
                    id={item.id}
                    handleModalOn={handleModalOn}
                    funcionDelete={funcionDelete}
                    setItemTask={setItemTask}
                />
            </View>
    )
}
