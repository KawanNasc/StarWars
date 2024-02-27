import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

const request = async(callback) => {
  const response = await fetch('https://swapi.dev/api/people')
  const parsed = await response.json();
  callback(parsed.results);
}

export default function App() {

  const [registros, setRegistros] = useState([]);

  useEffect(() => { request(setRegistros); },[] )

  return (
    <View style={estilos.container}>

      <Text style={ estilos.titulo }> API do Star Wars </Text>

      <FlatList 
      data={registros}  
      renderItem={ ( {item} ) => 
        <SafeAreaView style={ estilos.itens }>
          <Text> Nome: {item.name} {'\n'} </Text> 
          <Text> Cor dos olhos: {item.eye_color} {'\n'} </Text> 
          <Text> Massa: {item.mass} </Text> 

        </SafeAreaView>
      } />

      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({

  container: { flex: 1, flexDirection: "column", justifyContent: "space-between", backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between" },

  itens: { flex: 1, flexWrap: "wrap", backgroundColor: "#a50800", margin: 40, padding: 20, textAlign: "center", fontSize: 20, color: "#fff" },

  titulo: { fontSize: 30, textAlign: "center", marginVertical: 10 }

});
