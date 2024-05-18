import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Modal, Text} from 'react-native';
import Video from 'react-native-video';
import {videoStyles} from './video-styles';

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
  const styles = videoStyles();

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

export default VideoComponentScreen;
