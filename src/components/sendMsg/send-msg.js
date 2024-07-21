// const phoneNumbers = ['9398553029', '8297979036', '96768829722'];

import {Linking, Platform, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';

const MessageSendComponent = () => {
  const handleSendMessage = () => {
    const phoneNumbers = [
      '9398553029',
      '8297979036',
      '9676882972',
      '7095373638',
    ];
    const message = 'This msg coming from worms'; // Message content

    let numbers = phoneNumbers.join(';'); // Join phone numbers with ';' delimiter

    const url =
      Platform.OS === 'android'
        ? `sms:${numbers}?body=${encodeURIComponent(message)}`
        : `sms:/open?addresses=${numbers}&body=${encodeURIComponent(message)}`;

    Linking.openURL(url)
      .then(result => {
        if (result) {
          console.log('SMS app opened successfully');
        } else {
          console.log('Failed to open SMS app');
        }
      })
      .catch(error => console.error('Error opening SMS app:', error));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'pink', height: '100vh'}}>
      <TouchableOpacity onPress={handleSendMessage}>
        <Text>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageSendComponent;

// phoneNumbers.forEach(number => {
//   const link =
//     Platform.OS === 'android'
//       ? `sms:${number}?body=${encodeURIComponent(message)}`
//       : `sms:${number}&body=${encodeURIComponent(message)}`;

//   const sendSMS = () => {
//     Linking.canOpenURL(link)
//       .then(supported => {
//         if (!supported) {
//           console.log('Unsupported url: ' + link);
//         } else {
//           Linking.openURL(link); // Send message to each contact
//         }
//       })
//       .catch(err => console.error('An error occurred', err));
//   };

//   sendSMS(); // Call the function to send SMS
// });
