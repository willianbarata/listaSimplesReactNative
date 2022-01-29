import React, { Component }from 'react';
import { View, Platform, StyleSheet, FlatList } from 'react-native';
import ListItem from './src/ListItem';

export default class listaWhatsapp extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[
          {key: '1', img:'https://www.b7web.com.br/avatar1.png', nome:'Willian', msg: 'Oii tudo bom?' },
          {key: '2', img:'https://www.b7web.com.br/avatar2.png', nome:'João', msg: ' tudo bom e vc' },
          {key: '3', img:'https://www.b7web.com.br/avatar3.png', nome:'Bia', msg: 'Oii tudo bom?' },
          {key: '4', img:'https://www.b7web.com.br/avatar1.png', nome:'Pedro', msg: 'Oii tudo bom?' },
          {key: '5', img:'https://www.b7web.com.br/avatar3.png', nome:'Ana', msg: 'Oii tudo bom?' },
          {key: '6', img:'https://www.b7web.com.br/avatar2.png', nome:'Marcos', msg: 'Oii tudo bom?' },
          {key: '7', img:'https://www.b7web.com.br/avatar1.png', nome:'Bruno', msg: 'Oii tudo bom?' }
      ]
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList 
          data={this.state.list}
          renderItem={({item}) => <ListItem data={item}/>}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:(Platform.OS == 'ios') ? 20 : 0
    }
});