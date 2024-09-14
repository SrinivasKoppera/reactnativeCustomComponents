import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const TermsAndConditions = () => {
  const topicIndexItem = [
    'OUR SERVICES',
    'INTELLECTUAL PROPERTY RIGHTS',
    'Error Tech',
    'Careersure',
    'javascript',
    'react js',
    'react native',
  ];

  // Create ref for ScrollView
  const scrollViewRef = useRef(null);

  // State to hold section positions
  const [sectionPositions, setSectionPositions] = useState({});

  // Function to handle scrolling
  const scrollToSection = section => {
    if (sectionPositions[section] !== undefined) {
      scrollViewRef.current.scrollTo({
        y: sectionPositions[section],
        animated: true,
      });
    } else {
      console.warn(`No position found for section: ${section}`);
    }
  };

  // Function to measure section positions
  const handleLayout = (section, event) => {
    const {y} = event.nativeEvent.layout;
    setSectionPositions(prev => ({...prev, [section]: y}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tableOfContentsContainer}>
        <Text style={styles.heading}>TABLE OF CONTENTS</Text>
        {topicIndexItem.map((topic, index) => {
          const sectionId = topic.toLowerCase().replace(/ /g, '');
          return (
            <TouchableOpacity
              key={index}
              onPress={() => scrollToSection(sectionId)}>
              <Text style={styles.paragraph}>{`${index + 1}. ${topic}`}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}>
        <View onLayout={event => handleLayout('ourservices', event)}>
          <Text style={styles.heading}>1. OUR SERVICES</Text>
          <Text style={styles.paragraph}>
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Services from other locations do so
            on their own initiative and are solely responsible for compliance
            with local laws, if and to the extent local laws are applicable.
          </Text>
        </View>
        <View
          onLayout={event => handleLayout('intellectualpropertyrights', event)}>
          <Text style={styles.heading}>2. INTELLECTUAL PROPERTY RIGHTS</Text>
          <Text style={styles.heading}>Our intellectual property</Text>
          <Text style={styles.paragraph}>
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            'Content'), as well as the trademarks, service marks, and logos
            contained therein (the 'Marks').
          </Text>
        </View>
        <View onLayout={event => handleLayout('errortech', event)}>
          <Text style={styles.heading}>3. Error Tech</Text>
          <Text style={styles.paragraph}>
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            'Content'), as well as the trademarks, service marks, and logos
            contained therein (the 'Marks').
          </Text>
        </View>
        <View onLayout={event => handleLayout('careersure', event)}>
          <Text style={styles.heading}>4. Careersure</Text>
          <Text style={styles.paragraph}>
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            'Content'), as well as the trademarks, service marks, and logos
            contained therein (the 'Marks').
          </Text>
        </View>
        <View onLayout={event => handleLayout('javascript', event)}>
          <Text style={styles.heading}>5. javascript</Text>
          <Text style={styles.paragraph}>
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            'Content'), as well as the trademarks, service marks, and logos
            contained therein (the 'Marks').
          </Text>
        </View>
        <View onLayout={event => handleLayout('reactjs', event)}>
          <Text style={styles.heading}>6. React js</Text>
          <Text style={styles.paragraph}>
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            'Content'), as well as the trademarks, service marks, and logos
            contained therein (the 'Marks').
          </Text>
        </View>
        <View onLayout={event => handleLayout('reactnative', event)}>
          <Text style={styles.heading}>7. React native</Text>
          <Text style={styles.paragraph}>
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            'Content'), as well as the trademarks, service marks, and logos
            contained therein (the 'Marks').
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the SafeAreaView takes up the full screen
  },
  tableOfContentsContainer: {
    margin: 10,
  },
  scrollViewContent: {
    padding: 10, // Optional: Add padding to the ScrollView content
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginVertical: 5,
  },
  paragraph: {
    fontSize: 14,
    marginVertical: 5,
    textAlign: 'justify',
    fontWeight: '400',
  },
});

export default TermsAndConditions;
