import React from 'react'
import { View } from 'react-native'
import TareaAdd from '../../TareaAdd'

export default function TareaAddContainer({ item, addTask, inputTask, tareaAgregada}) {

    

    return (
            <View>
                <TareaAdd
                    placeHolderInput={"New task"}
                    placeHolderColor={"#0471A6"}
                    titleBtn={"ADD"}
                    colorBtn={"#0471A6"}
                    funcionAdd={addTask}
                    funcionInput={inputTask}
                    tareaAgregada={tareaAgregada}
                />
            </View>
    )
}