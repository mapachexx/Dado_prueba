import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Vibration,
  FlatList,
} from 'react-native';

// Caras del dado en Unicode
const caras = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

export default function DadoScreen() {
  const [cara, setCara] = useState('⚀');
  const [historial, setHistorial] = useState<string[]>([]);

  const tirarDado = () => {
    const indice = Math.floor(Math.random() * 6);
    const nuevaCara = caras[indice];
    setCara(nuevaCara);
    Vibration.vibrate(100); // vibración de 100ms

    // Agrega la tirada al principio del historial (máximo 5)
    setHistorial((prev) => [nuevaCara, ...prev.slice(0, 4)]);
  };

  useEffect(() => {
    tirarDado();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={tirarDado}>
      <View style={styles.container}>
        <Text style={styles.dado}>{cara}</Text>
        <Text style={styles.instruccion}>Tocá para tirar el dado</Text>

        <Text style={styles.historialTitulo}>Últimas tiradas:</Text>
        <FlatList
          data={historial}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={({ item }) => (
            <Text style={styles.historialItem}>{item}</Text>
          )}
          contentContainerStyle={styles.historialContainer}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dado: {
    fontSize: 120,
    color: 'white',
  },
  instruccion: {
    marginTop: 20,
    color: '#aaa',
    fontSize: 16,
  },
  historialTitulo: {
    marginTop: 40,
    fontSize: 18,
    color: '#ddd',
  },
  historialContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  historialItem: {
    fontSize: 40,
    color: '#bbb',
    marginHorizontal: 5,
  },
});
