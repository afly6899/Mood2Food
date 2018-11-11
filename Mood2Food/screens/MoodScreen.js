import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Bulky, Chocolate, Meat, Combinations, Others, ProteinVitamin, Salty,
  Starch, Sugar, Sweet, Tough, Others2 } from '../components/Recipes';

export default class MoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Mood Screen',
  };

  render() {
    const {navigation} = this.props;
    const input_mood = navigation.getParam('input_mood', 'None nada apathetic');

    return (
      input_mood,
      <ScrollView style={styles.container}>
        <View style={{
          alignItems: 'stretch',
        }}>
          <Text style={styles.baseText}> You are feeling... </Text>
          <Text style={styles.titleText}> {input_mood} </Text>
          <Text style={styles.baseText}> ~ Bon Appetit ~ </Text>
        </View>
        <RenderRecipes></RenderRecipes>
      </ScrollView>
    );
  }

}

const RenderRecipes = () => {
  var mood = 's';

  switch(mood) {
    case 'sad': return (<Meat></Meat>);
    break;
    case 'happy': return (<Bulky></Bulky>);
    break;
    default: return(<Text style={styles.errorText}>No Recipes!</Text>);
  }
}

export const SetColor = (m) => {
  var mood = m;

  var color;
  switch(mood) {
    case 'happy': color = 'rgb(255,255,0)';
    break;
    case 'sad': color = 'rgb(-100,149,237)';
    break;
    case 'calm': color = 'rgb(-144,238,144)';
    break;
    case 'excited': color = 'rgb(255,69,0)';
    break;
    case 'stressed': color = 'rgb(255,140,0)';
    break;
    case 'romantic': color = 'rgb(220,20,60)';
    break;
    case 'angry': color = 'rgb(139,0,0)';
    break;
    case 'focused': color = 'rgb(-100,149,237)';
    break;
    case 'frightened': color = 'rgb(255,255,0)';
    break;
    default: color = 'white';
  }
    return (
        color
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: SetColor(),
  },
  titleText: {
    fontSize: 80,
    fontFamily: 'mightype',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  baseText: {
    fontSize: 40,
    fontFamily: 'mightype',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  errorText: {
    fontSize: 40,
    fontFamily: 'mightype',
    textAlign: 'center',
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  }
});
