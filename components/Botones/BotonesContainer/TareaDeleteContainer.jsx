import React from 'react'
import { View } from 'react-native'
import TareaDelete from '../TareaDelete'

export default function TareaDeleteContainer({ item, setArrTareas, fn }) {

    

    return (
            <View>
                <TareaDelete
                    tarea={item.value}
                    titleBtn={"Delete"}
                    color={"red"}
                    id={item.id}
                    fn={fn}
                />
            </View>
    )
}
