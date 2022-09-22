import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function ModalDeleteTask({ isModalOpen, setIsModalOpen, funcionDelete, itemTask }) {
    const style = StyleSheet.create({
        modalContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'yellow',
            marginTop: 10

        }

    })


    return (
        <>
            <Modal // el modal es una API de RN en donde como FLATLIST tiene que tener unas propiedades para que funcione correctamente
                visible={isModalOpen} // con un booleano definimos si es visible o no
                animationType={'slide'}
            >
                <View style={style.modalContainer}>
                    <Text>
                        {`Borrar la tarea ${itemTask.value} ? `}
                    </Text>
                    <View>
                        <Button
                            title='cancelar'
                            onPress={() => setIsModalOpen(!isModalOpen)}
                        />
                        <Button
                            title='eliminar'
                            onPress={() => {
                                funcionDelete(itemTask.id);
                                setIsModalOpen(!isModalOpen);
                            }}
                        />
                    </View>

                </View>
            </Modal>

        </>
    )
}
