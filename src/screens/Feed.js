import React, { Component } from 'react';
import { View , StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header'
import Post from '../components/Post'

// import { Container } from './styles';

class Feed extends Component {
  state = {
    posts : [{
      id: Math.random(),
      nickname: 'Rafael Pereira',
      email: 'rafarepe@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [{
        nickname: 'Joan Araujo',
        comment: 'Stunnig!'
      }, {
        nickname: 'JOao da silva',
        comment: 'TOp da balada',
      }]
    }, {
      id: Math.random(),
      nickname: 'Paulo araruo',
      email: 'paulo@hotmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: []

    }]
  }

  render() {
    return(
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <Post key={item.id} {...item} />} />
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
    //backgroundColor: '#000'
  }
})


export default Feed