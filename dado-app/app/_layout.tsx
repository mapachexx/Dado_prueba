import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

// Lista de caracteres Unicode que representan las caras del dado
const caras = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

export default function DadoScreen() {
  // Estado para guardar la cara actual del dado
  const [cara, setCara] = useState('⚀');

  // Función que elige una cara aleatoria del dado
  const tirarDado = () => {
    const indice = Math.floor(Math.random() * 6); // número entre 0 y 5
    setCara(caras[indice]);
  };

  // Al iniciar la app, se tira el dado una vez
  useEffect(() => {
    tirarDado();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={tirarDado}>
      <View style={styles.container}>
        <Text style={styles.dado}>{cara}</Text>
        <Text style={styles.instruccion}>Tocá en cualquier lugar para tirar el dado</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

// Estilos de la app (sencillos y centrados)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dado: {
    fontSize: 200,
    color: 'black',
  },
  instruccion: {
    marginTop: 30,
    color: '#aaa',
    fontSize: 20,
  },
});
