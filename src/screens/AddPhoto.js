import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'


class AddPhoto extends Component {
  state = {
    image: null,
    comment: '',
  }

  pickImage = () => {
    ImagePicker.showImagePicker({
      title: 'Escolha a imagem',
      maxHeight: 600,
      maxWidth: 800

    }, res => {
      if (!res.didCancel) {
        this.setState({ image: { uri: res.uri, base64: res.data } })
      }
    })
  }


  save = async () => {
   this.props.addPost({
     id: Math.random(),
     nickname: this.props.name,
     email: this.props.email,
     image: this.props.image,
     comments: [{
       nickname: this.props.name,
       comment: this.state.comment

     }]

    })
    this.setState({ image: null, comment: '' })
    this.props.navigation.navigate('Feed')

  }
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title}> Compartihe uma Imagem</Text>
        <View style={styles.imageContainer} >
          <Image source={this.state.image} style={styles.image} />
        </View>
        <TouchableOpacity onPress={this.pickImage} style={styles.button}>
          <Text style={styles.buttomText}> Escolha a foto </Text>
        </TouchableOpacity>
        <TextInput placeholder='Algum comentário para a foto?'
          style={styles.input} value={this.state.comment}
          onChangeText={comment => this.setState({ comment })}></TextInput>
        <TouchableOpacity onPress={this.save} style={styles.button}>
          <Text style={styles.buttomText}> Salvar </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    alignItems: 'center',
    height: Dimensions.get('window').width * 3 / 4,
    backgroundColor: '#EEE',
    marginTop: 10
  },
  image: {
    width: Dimensions.get('window').width * 3 / 4,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  input: {
    marginTop: 20,
    width: '90%'

  },
  buttomText: {
    marginTop: 20,
    color: '#fff'
  }
})

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => dispatch(addPost(post))
  }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)
