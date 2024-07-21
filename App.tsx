/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import VideoComponentContainer from './src/components/reactNativeVideo/video-container';
import SuggestionsComponent from './src/components/suggestionsComponent/suggestions-screen';
import DigitalSignatureCapture from './src/components/digitalSignatureCapturing/digital-signature-capture-screen';
import VisionCameraComponent from './src/components/visionCameraComponent/vision-camera-component';
import MessageSendComponent from './src/components/sendMsg/send-msg';
import Payment from './src/components/paymentIntegrations/payment-integration';
import {StripeProvider} from '@stripe/stripe-react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <StripeProvider publishableKey="pk_test_51NxP87SGBQTt8xinwiKFWgPp37CkIeMq913VXlckNszsysSLvgigkNXJX6a3Z7crelm5MDCAXdUY4x3WzrlWzBJ5002hxoYJIk">
      {/* <SafeAreaView style={backgroundStyle}> */}
      {/* <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        /> */}
      {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}> */}
      {/* <VideoComponentContainer /> */}
      {/* <SuggestionsComponent /> */}
      {/* <DigitalSignatureCapture /> */}
      {/* <VisionCameraComponent /> */}
      {/* <MessageSendComponent /> */}
      <Payment />
      {/* </ScrollView> */}
      {/* </SafeAreaView> */}
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
