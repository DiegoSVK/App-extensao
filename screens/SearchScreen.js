import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, Image } from 'react-native';

const PEXELS_API_KEY = 'z9oX16jIS2JCnbEyf3LxS0QurrDGQN9cJLabUR7JUhv6WxgdAAEGblZH';
const PEXELS_API_URL = 'https://api.pexels.com/v1/search';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]); 

  const handleSearch = async () => {
    try {
      const response = await fetch(`${PEXELS_API_URL}?query=${query}&per_page=10`, {
        method: 'GET',
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });
      const data = await response.json();

      if (data.photos) {
        setImages(data.photos);
      } else {
        console.error('Erro ao buscar imagens');
      }
    } catch (error) {
      console.error('Erro ao chamar a API do Pexels', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do alimento"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={handleSearch} />
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.src.medium }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.imageDescription}>{item.alt}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FA8072', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
    backgroundColor:'#ffffff',
  },
  imageContainer: {
    flex: 1,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
  imageDescription: {
    textAlign: 'center',
    marginTop: 8,
  },
});
