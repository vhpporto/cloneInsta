import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText={name => this.setState({ name })} />
                <TextInput
                    placeholder='Email' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText={email => this.setState({ email })} />
                <TextInput
                    placeholder='Senha' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity
                    onPress={() => {}} style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>


                
            </View>
        )

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        fontSize: 20,
        color: 'white'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})


export default Register