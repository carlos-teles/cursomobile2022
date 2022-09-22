import * as React from 'react';
import { Text, View, StyleSheet, Alert, Image, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  function showFrase(){
    let pos = getRandomIntInclusive(0,4);
    let frase = frases[pos];
    alert(frase);
  }
  
  function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let frases = [
            "O professor é o cara!!!!!",
            "O professor é o melhor amigo do aluno",
            "O canal dfilitto têm um ótimo professor",
            "O professor Danilo é muito legal!!!!!",
            "Acesse o site www.dfilitto.com.br"
          ];

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        15 de Outubro dia do professor
      </Text>
      <Image style={styles.logo} source={require('./assets/professor.jpg')} />
      <Button style={styles.button}
        title="Sortear frase"
        onPress={() => showFrase()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    marginTop:10,
    marginBottom:10,
    width: Dimensions.get('window').width - 20,
    height: 300,
  }

});
