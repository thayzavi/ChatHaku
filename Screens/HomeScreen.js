import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Image source={require('../assets/logo.jpg')} style={styles.avatar}/>
                <Text style={styles.titulo}>Olá! Eu sou o Haku</Text>
                <Text style={styles.subtitulo}>
                    Estou aqui para conversa com você.
                </Text>
                <Button mode="contained" onPress={() => navigation.navigate('Chat')} style={styles.btn}> Ir para o Chat</Button>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e0f2f1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: '85%',
        padding: 20,
        borderRadius: 16,

    },
    content:{
        alignItems: 'center',

    },
    avatar:{
        height: 290,
        width:290,
        marginBottom: 16,
        borderRadius: '50%',
    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#004d40',
        textAlign:'center',
    },
    subtitulo:{
        fontSize: 16,
        color: '#00695c',
        marginBottom: 20,
        textAlign: 'center',
    },
    btn:{
        marginTop: 10,
        whidth: '100%',
    },
});