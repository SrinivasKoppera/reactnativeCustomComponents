// import React, {useState, useEffect} from 'react';
// import {StripeProvider} from '@stripe/stripe-react-native';

// import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
// import {useStripe} from '@stripe/stripe-react-native';

// const Payment = () => {
//   const API_URL = 'https://zap-an7j.onrender.com';
//   const {initPaymentSheet, presentPaymentSheet} = useStripe();
//   const [loading, setLoading] = useState(false);

//   const fetchPaymentSheetParams = async () => {
//     const postData = {
//       user_type: '2',
//       user_id: '30013',
//       amount: 200,
//       cust_name: 'sai',
//       cust_phone: '1234567880',
//     };
//     const response = await fetch(`${API_URL}/payment-sheet`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(postData),
//     });

//     const data = await response.json();
//     console.log('Data from server:', data);

//     const {paymentIntent, customer} = data;

//     return {
//       paymentIntent,
//       customer,
//     };
//   };

//   const initializePaymentSheet = async () => {
//     try {
//       const {paymentIntent, customer} = await fetchPaymentSheetParams();

//       console.log('Initializing payment sheet with:', {
//         customerId: customer,
//         paymentIntentClientSecret: paymentIntent,
//         merchantDisplayName: 'Merchant Name',
//       });

//       const {error} = await initPaymentSheet({
//         customerId: customer,
//         paymentIntentClientSecret: paymentIntent,
//         merchantDisplayName: 'Merchant Name',
//       });
//       console.log('ERROR: ', error);
//       if (error) {
//         console.error('Error initializing payment sheet:', error);
//       } else {
//         setLoading(true);
//       }
//     } catch (err) {
//       console.error('Error in initializePaymentSheet:', err);
//     }
//   };

//   const openPaymentSheet = async () => {
//     const result = await presentPaymentSheet();
//     console.log('This is a payment sheet result:', result);
//     // const {error} = await presentPaymentSheet();

//     if (error) {
//       console.log(`Error code: ${error.code}`, error.message);
//     } else {
//       console.log('Success', 'Your order is confirmed!');
//     }
//   };

//   useEffect(() => {
//     initializePaymentSheet();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {!loading ? (
//         <Text style={{color: 'black'}}>Loading...</Text>
//       ) : (
//         <TouchableOpacity
//           style={styles.button}
//           disabled={!loading}
//           title="Checkout"
//           color="#841584"
//           onPress={openPaymentSheet}>
//           <Text style={{color: 'white', fontWeight: 'bold'}}>Checkout</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginHorizontal: 100,
//     marginVertical: 100,
//   },
//   button: {
//     backgroundColor: '#00aeef',
//     borderColor: 'red',
//     borderWidth: 5,
//     borderRadius: 15,
//     height: 50,
//     width: 150,
//   },
// });

// export default Payment;

const API_URL = 'http://192.168.29.97:9090';

import React, {useState, useEffect} from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useStripe} from '@stripe/stripe-react-native';

const App = () => {
  // const API_URL = 'https://zap-an7j.onrender.com';
  const API_URL = 'http://192.168.29.97:9090';
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    try {
      const postData = {
        user_type: '2',
        user_id: '30013',
        amount: 200,
        cust_name: 'sai',
        cust_phone: '1234567880',
      };
      const response = await fetch(`${API_URL}/payment-sheet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      console.log('Data from server:', data);

      const {paymentIntent, customer} = data;
      return {
        paymentIntent,
        customer,
      };
    } catch (error) {
      console.error('Error fetching payment sheet params:', error);
      throw error;
    }
  };

  const initializePaymentSheet = async () => {
    try {
      const {paymentIntent, customer} = await fetchPaymentSheetParams();
      console.log('Initializing payment sheet with:', {
        customerId: customer,
        paymentIntentClientSecret: paymentIntent,
        merchantDisplayName: 'Merchant Name',
      });

      const {error} = await initPaymentSheet({
        merchantDisplayName: 'Acme, Inc.',
        intentConfiguration: {
          mode: {
            amount: 200 * 100, // Adjust this amount if necessary
            currencyCode: 'inr',
          },
          confirmHandler: (
            paymentMethod,
            shouldSavePaymentMethod,
            intentCreationCallback,
          ) => {
            console.log(
              'confirmHandler > paymentMethod:',
              JSON.stringify(paymentMethod, null, 2),
            );
            console.log(
              'confirmHandler > shouldSavePaymentMethod:',
              JSON.stringify(shouldSavePaymentMethod, null, 2),
            );
            console.log('confirmHandler > clientSecret:', paymentIntent);
            intentCreationCallback({clientSecret: paymentIntent});
          },
        },
      });

      if (error) {
        console.error('Error initializing payment sheet:', error);
      } else {
        console.log('Payment sheet initialized successfully');
        setLoading(true);
      }
    } catch (error) {
      console.error('Error in initializePaymentSheet:', error);
    }
  };

  const openPaymentSheet = async () => {
    try {
      const {error} = await presentPaymentSheet();
      if (error) {
        console.log(`Error code: ${error.code}`, error.message);
      } else {
        console.log('Success', 'Your order is confirmed!');
      }
    } catch (error) {
      console.error('Error presenting payment sheet:', error);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View style={styles.container}>
      {!loading ? (
        <Text style={{color: 'black'}}>Loading...</Text>
      ) : (
        <TouchableOpacity
          style={styles.button}
          disabled={!loading}
          title="Checkout"
          color="#841584"
          onPress={openPaymentSheet}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginHorizontal: 100,
    marginVertical: 100,
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15,
    height: 50,
    width: 150,
  },
});

const Payment = () => <App />;

export default Payment;
