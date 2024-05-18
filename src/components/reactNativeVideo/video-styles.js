import {StyleSheet, Dimensions} from 'react-native';

export function videoStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    list: {
      alignItems: 'center',
    },
    video: {
      width: Dimensions.get('window').width / 2 - 10,
      height: 200,
      margin: 5,
    },
    fullScreenContainer: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fullScreenVideo: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    buttonContainer: {
      position: 'absolute',
      top: 40,
      right: 20,
      flexDirection: 'row',
    },
    closeButton: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 10,
      borderRadius: 5,
      marginRight: 10,
    },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
    },
    nextButton: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 10,
      borderRadius: 5,
    },
    nextButtonText: {
      color: 'white',
      fontSize: 16,
    },
  });
  return styles;
}
