import {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

const DigitalSignatureCapture = ({text, onOK}) => {
  const [colorText, setPenColor] = useState('');
  const ref = useRef();

  const handleOK = signature => {
    console.log(signature);
    onOK(signature); // Callback from Component props
  };

  const handleClear = () => {
    console.log('clear success!');
  };

  const handleColorChange = () => {
    ref.current.changePenColor(colorText);
  };

  //   #Function to handle Undo
  const handleUndo = () => {
    ref.current.undo();
  };

  // Function to handle Redo
  const handleRedo = () => {
    ref.current.redo();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textSign}>Sign Below</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.setButton, {marginRight: 30, backgroundColor: 'red'}]}
          onPress={handleUndo}>
          <Text style={styles.text}>Undo</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Specify Pen Color"
          style={styles.textInput}
          autoCapitalize="none"
          value={colorText}
          onChangeText={setPenColor}
        />
        <TouchableOpacity style={styles.setButton} onPress={handleColorChange}>
          <Text style={styles.text}>Set</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.setButton, {marginLeft: 30, backgroundColor: 'red'}]}
          onPress={handleRedo}>
          <Text style={styles.text}>Redo</Text>
        </TouchableOpacity>
      </View>

      <SignatureScreen
        ref={ref}
        // onEmpty={handleEmpty}
        onClear={handleClear}
        penColor={colorText}
      />
    </SafeAreaView>
  );
};

export default DigitalSignatureCapture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textSign: {
    color: 'deepskyblue',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  text: {
    color: '#fff',
    fontWeight: '900',
  },
  textInput: {
    paddingVertical: 10,
    textAlign: 'center',
  },
  setButton: {
    backgroundColor: 'deepskyblue',
    textAlign: 'center',
    fontWeight: '900',
    color: '#fff',
    marginHorizontal: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
