import React, {useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Antidiscrimination from './anti-discrimination-screen';
import Disclaimer from './disclaimer-screen';
import TermsAndConditions from './specific-view-redirection';

const termsList = ['Terms and conditions', 'Disclaimer', 'Anti disclaimer'];

const termsData = {
  'Terms and conditions': <TermsAndConditions />,
  Disclaimer: <Disclaimer />,
  'Anti disclaimer': <Antidiscrimination />,
};

const LegalScreen = () => {
  const [selectedTerm, setSelectedTerm] = useState('Anti disclaimer');

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => setSelectedTerm(item)}>
      <View style={[styles.item, selectedTerm === item && styles.selectedItem]}>
        <Text
          style={[
            styles.itemText,
            selectedTerm === item && styles.selectedItemText,
          ]}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={termsList}
        renderItem={renderItem}
        keyExtractor={item => item}
        extraData={selectedTerm}
      />

      {selectedTerm ? (
        <View>
          <View>{termsData[selectedTerm]}</View>
        </View>
      ) : (
        <Text style={styles.detailsText}>Select a term to see the details</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E8E9EB',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    marginBottom: 60,
    padddigBottom: 150,
    height: '100%',
    width: '100%',
  },

  item: {
    padding: 10,
    backgroundColor: '#fff',
    borderLeftWidth: 5,
    borderLeftColor: '#E8E9EB',
  },
  selectedItem: {
    borderLeftColor: 'green',
  },
  itemText: {
    fontSize: 16,
  },
  selectedItemText: {
    fontWeight: 'bold',
  },
  detailsContainer: {
    // width: '70%',
    // padding: 20,
  },
  detailsText: {
    // fontSize: 16,
  },
});

export default LegalScreen;
