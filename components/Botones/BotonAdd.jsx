import { Button } from 'react-native'
import React from 'react'

export default function BotonAdd({title, onPress, color}) {

    return (
        <>
                <Button 
                title={title}
                onPress={onPress} 
                color={color} />
        </>
    )
}