import React, { use, useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet,View, KeyboardAvoidingView,Platform, ImageBackground} from 'react-native';
import {TextInput, Button, Text,Card, Provider as PaperProvider, ActivityIndicator, } from 'react-native-paper';
import axios from 'axios';

export default function ChatScreen(){
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);// histórico de mensagens
  const [carregando, setCarregando] = useState(false);

  const enviarMensagem = async () => {
    if (!mensagem.trim()) return;

    const novaMensagem = {texto: mensagem, autor: 'usuário'};
    setMensagens((prev) => [...prev, novaMensagem]);//array com todas as mensagens
    setMensagem('');//limpando o campo de texto
    setCarregando(true);//carregamento da pagina

    try{
      const respostaApi = await axios.post('http://SEUIP:3000/chat', {
        mensagem: novaMensagem.texto,
      });

      const respostaHaku = {
        texto: respostaApi.data.resposta,
        autor: 'haku',
      };
      setMensagens((prev) => [...prev, respostaHaku]);
    } catch (error) {
      console.error(error);
      setMensagens((prev) => [
        ...prev,
        {texto: 'Desculpe, Haku não conseguiu responder agora.', autor: 'haku'},
      ]);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <PaperProvider>
        <ImageBackground
        source={require('../assets/fundo.jpg')}
        style={{flex:1}}
        resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
          <Text style={styles.titulo}> Converse com o Haku </Text>

          <ScrollView contentContainerStyle={styles.chatContainer}>
            {mensagens.map((msg, index) => (
              <View
              key={index}
              style={[
                styles.mensagem,
                msg.autor === 'usuário' ? styles.usuario : styles.haku,
              ]}
              >
                <Text style={styles.textoMensagem}>{msg.texto}</Text>
              </View>
            ))}
            {carregando && (
              <ActivityIndicator animating={true} color="#00796b" style={{marginTop: 10}} />
            )}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
            placeholder="Digite sua mensagem..."
            value={mensagem}
            onChangeText={setMensagem}
            mode="outlined"
            style={styles.input}
            multiline
            />
            <Button mode="contained" onPress={enviarMensagem} disabled={carregando}> Enviar </Button>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tranparent',
  },
  titulo:{
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
    textAlign: 'center',
    color: '#000',
  },
  chatContainer: {
  paddingHorizontal: 20,
  paddingBottom: 10,
  },
  mensagem: {
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%' , 
  },
  usuario:{
    backgroundColor: '#b3dfdb',
    alignSelf: 'flex-end',
  },
  haku:{
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
  },
  textoMensagem:{
    fontSize: 16,
  },
  inputContainer:{
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa',
    marginBottom: 30,
  },
  input:{
    marginBottom: 10
  },
});