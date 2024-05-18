// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   FlatList,
//   TouchableOpacity,
//   Dimensions,
//   Modal,
//   Text,
// } from 'react-native';
// import Video from 'react-native-video';

// // Importing video files statically
// const videoUrls = [
//   {id: '1', uri: require('../assets/videos/Output-2.mp4')},
//   {id: '2', uri: require('../assets/videos/Output-2.mp4')},
//   {id: '3', uri: require('../assets/videos/Output-3.mp4')},
//   {id: '4', uri: require('../assets/videos/Output-4.mp4')},
//   {id: '5', uri: require('../assets/videos/Output-4.mp4')},
//   {id: '6', uri: require('../assets/videos/Output-3.mp4')},
// ];

// const VideoComponentScreen = () => {
//   const [playingVideoId, setPlayingVideoId] = useState(null);
//   const [fullScreenVisible, setFullScreenVisible] = useState(false);

//   const handleVideoPress = id => {
//     setPlayingVideoId(id);
//     setFullScreenVisible(true);
//   };

//   const renderItem = ({item}) => (
//     <TouchableOpacity onPress={() => handleVideoPress(item.id)}>
//       <Video
//         source={item.uri}
//         style={styles.video}
//         paused={playingVideoId !== item.id || !fullScreenVisible}
//         resizeMode="cover"
//         controls={false}
//       />
//     </TouchableOpacity>
//   );

//   const selectedVideo = videoUrls.find(video => video.id === playingVideoId);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={videoUrls}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//       />
//       {selectedVideo && (
//         <Modal
//           visible={fullScreenVisible}
//           transparent={true}
//           animationType="slide"
//           onRequestClose={() => setFullScreenVisible(false)}>
//           <View style={styles.fullScreenContainer}>
//             <Video
//               source={selectedVideo.uri}
//               style={styles.fullScreenVideo}
//               paused={false}
//               resizeMode="contain"
//               controls={true}
//             />
//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setFullScreenVisible(false)}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   list: {
//     alignItems: 'center',
//   },
//   video: {
//     width: Dimensions.get('window').width / 2 - 10,
//     height: 200,
//     margin: 5,
//   },
//   fullScreenContainer: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullScreenVideo: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     padding: 10,
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default VideoComponentScreen;

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
  Text,
} from 'react-native';
import Video from 'react-native-video';

// Importing video files statically
const videoUrls = [
  {id: '1', uri: require('../../assets/videos/Output-2.mp4')},
  {id: '2', uri: require('../../assets/videos/Output-2.mp4')},
  {id: '3', uri: require('../../assets/videos/Output-3.mp4')},
  {id: '4', uri: require('../../assets/videos/Output-4.mp4')},
  {id: '5', uri: require('../../assets/videos/Output-4.mp4')},
  {id: '6', uri: require('../../assets/videos/Output-3.mp4')},
];

const VideoComponentScreen = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [fullScreenVisible, setFullScreenVisible] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const handleVideoPress = (id, index) => {
    setPlayingVideoId(id);
    setCurrentVideoIndex(index);
    setFullScreenVisible(true);
  };

  const handleNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videoUrls.length;
    setPlayingVideoId(videoUrls[nextIndex].id);
    setCurrentVideoIndex(nextIndex);
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity onPress={() => handleVideoPress(item.id, index)}>
      <Video
        source={item.uri}
        style={styles.video}
        paused={playingVideoId !== item.id || !fullScreenVisible}
        resizeMode="cover"
        controls={false}
      />
    </TouchableOpacity>
  );

  const selectedVideo = videoUrls.find(video => video.id === playingVideoId);

  return (
    <View style={styles.container}>
      <FlatList
        data={videoUrls}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
      {selectedVideo && (
        <Modal
          visible={fullScreenVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setFullScreenVisible(false)}>
          <View style={styles.fullScreenContainer}>
            <Video
              source={selectedVideo.uri}
              style={styles.fullScreenVideo}
              paused={false}
              resizeMode="contain"
              controls={true}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setFullScreenVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleNextVideo}>
                <Text style={styles.nextButtonText}>Next Video</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

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

export default VideoComponentScreen;
