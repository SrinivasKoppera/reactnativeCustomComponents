import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const emailSuggestions = [
  {id: '1', name: 'Bob Perry', email: 'perrybob@gmail.com'},
  {id: '2', name: 'Alice Johnson', email: 'alicej@gmail.com'},
  {id: '3', name: 'John Mark', email: 'johnmark@gmail.com'},
  {id: '4', name: 'Jane Doe', email: 'janedoe@gmail.com'},
  {id: '5', name: 'Sam Smith', email: 'samsmith@gmail.com'},
  {id: '6', name: 'Sam Smith', email: 'samantha@gmail.com'},
  {id: '7', name: 'Sam Smith', email: 'sumathi@gmail.com'},
  {id: '8', name: 'Sam Smith', email: 'shashikumar@gmail.com'},
  {id: '9', name: 'Alice Johnson', email: 'anusheshma@gmail.com'},
  {id: '10', name: 'Alice Johnson', email: 'kirankumar@gmail.com'},
];

const SuggestionsComponent = () => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] =
    useState(emailSuggestions);
  const [selectedEmails, setSelectedEmails] = useState([]);

  const handleInputChange = text => {
    setQuery(text);
    if (text.length > 0) {
      const filtered = emailSuggestions.filter(suggestion =>
        suggestion.email.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionPress = email => {
    setSelectedEmails([...selectedEmails, email]);
    setQuery('');
    setFilteredSuggestions(
      filteredSuggestions.filter(
        suggestion => suggestion.email.toLowerCase() !== email.toLowerCase(),
      ),
    );
  };

  const handleRemoveEmail = email => {
    setSelectedEmails(selectedEmails.filter(selected => selected !== email));
  };

  return (
    // <View style={styles.container}>
    //   <View style={styles.inputContainer}>
    //     {selectedEmails.map((email, index) => (
    //       <View key={index} style={styles.emailTag}>
    //         <Text>{email}</Text>
    //         <TouchableOpacity
    //           onPress={() => handleRemoveEmail(email)}
    //           style={styles.cancelButton}>
    //           <Text style={styles.cancelButtonText}>x</Text>
    //         </TouchableOpacity>
    //       </View>
    //     ))}
    //     <TextInput
    //       style={styles.input}
    //       placeholder="To *"
    //       value={query}
    //       onChangeText={handleInputChange}
    //     />
    //   </View>
    //   {filteredSuggestions.length > 0 && (
    //     <View style={styles.suggestionsContainer}>
    //       <FlatList
    //         data={filteredSuggestions}
    //         keyExtractor={item => item.id}
    //         renderItem={({item}) => (
    //           <TouchableOpacity
    //             style={styles.suggestionItem}
    //             onPress={() => handleSuggestionPress(item.email)}>
    //             <Text>{item.name}</Text>
    //             <Text>{item.email}</Text>
    //           </TouchableOpacity>
    //         )}
    //       />
    //     </View>
    //   )}
    //   <TextInput style={styles.input} placeholder="Subject *" />
    //   <TextInput
    //     style={[styles.input, styles.emailBody]}
    //     placeholder="Email Body *"
    //     multiline
    //   />
    //   <TouchableOpacity style={styles.sendButton}>
    //     <Text style={styles.sendButtonText}>Send Invoice to Customer</Text>
    //   </TouchableOpacity>
    // </View>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {selectedEmails.map((email, index) => (
          <View key={index} style={styles.emailTag}>
            <Text>{email}</Text>
            <TouchableOpacity
              onPress={() => handleRemoveEmail(email)}
              style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>x</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TextInput
          style={styles.input}
          placeholder="To *"
          value={query}
          onChangeText={handleInputChange}
        />
      </View>
      {filteredSuggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={filteredSuggestions}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => handleSuggestionPress(item.email)}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <TextInput style={styles.input} placeholder="Subject *" />
      <TextInput
        style={[styles.input, styles.emailBody]}
        placeholder="Email Body *"
        multiline
      />
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send Invoice to Customer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  emailTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 5,
    margin: 2,
  },
  cancelButton: {
    marginLeft: 5,
  },
  cancelButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 2,
  },
  emailBody: {
    height: 100,
  },
  suggestionsContainer: {
    maxHeight: 150,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  subjectAndBodyContainer: {
    marginBottom: 10,
  },
});

export default SuggestionsComponent;
