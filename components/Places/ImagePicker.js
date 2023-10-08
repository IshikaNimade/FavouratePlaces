import React, { useState } from 'react';
import { View, Image, Text , StyleSheet} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Colors } from '../../constants/styles';
import OutlinedButton from '../ui/OutlinedButton';

function ImagePicker({ onTakeImage}) {
    const [pickedImage, setPickedImage] = useState();

    const pickImageHandler = () => {
    
    const options = {
      path: 'images',
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: false,
    }

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Image selection canceled');
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else {
        setPickedImage(response.assets[0].uri);
        console.log('Image URI:', pickedImage);    
        onTakeImage(response.assets[0].uri);
      }
    });
  };


  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton onPress={pickImageHandler} icon='camera'>pick image</OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
      width: '100%',
      height: 200,
      marginVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary100,
      borderRadius: 4,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain', 
    },
  });
