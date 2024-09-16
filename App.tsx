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
import PaymentScreen from './src/components/razorPayIntegration/razorpayintegration';
import LegalScreen from './src/components/termsAndConditions/main-screen';
import TermsAndConditions from './src/components/termsAndConditions/specific-view-redirection';

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
    <>
      {/* <View>
        <LegalScreen />
        <TermsAndConditions />
      </View> */}
      <StripeProvider publishableKey="pk_test_51PwPaRGHwmXpGIGPT6JDGkA1rBP7aHBQFMGFY2wM00HVEBIV875vVr59GVrvRN4K4w2SbPFMcf5SXWtQJQ8oby2x00iQl4fe53">
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
    </>
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
