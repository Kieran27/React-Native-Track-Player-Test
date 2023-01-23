import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TrackPlayer, { useProgress } from "react-native-track-player";

const tracks = [
  {
    id: 1,
    url: require("./assets/Asmr_Thunder.mp3"),
  },
];

const App = () => {
  const progress = useProgress();
  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setUpTrackPlayer();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => TrackPlayer.play()}>
        <Text>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.pause()}>
        <Text>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => TrackPlayer.seekTo(progress.position + 30)}
      >
        <Text>Forward</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => TrackPlayer.seekTo(progress.position - 30)}
      >
        <Text>Rewind</Text>
      </TouchableOpacity>
      <Text>{progress.duration}</Text>
      <Text>{progress.position}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
