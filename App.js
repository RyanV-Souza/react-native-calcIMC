import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      altura: '0.0',
      peso: '0',
    }
  }
  calcResultado(){
    let result = this.state.peso / (this.state.altura * this.state.altura)
    return result.toFixed(2)
  }
  render() {
    const {altura, peso} = this.state;

    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Calcule o seu IMC
        </Text>

        <TextInput 
          style={styles.input} 
          onChangeText={(a) => { this.setState({altura: a})}} 
          placeholder="Altura" 
          defaultValue={altura}
          keyboardType="numeric" 
        />

        <TextInput 
          style={styles.input} 
          onChangeText={(p) => { this.setState({peso: p})}} 
          placeholder="Peso" 
          defaultValue={peso}
          keyboardType="numeric" 
        />

        <Text style={styles.titulo}>
          {
           this.calcResultado()
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    margin: 15,
  },
});