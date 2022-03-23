import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export default function BrightnessSlider({ brightness, state }) {
  return (
    <View>
      <View style={styles.slideWrap}>
        <Ionicons name="sunny-outline" size={20} />
        <Slider
          style={{width: 280, height: 20, marginHorizontal: 10}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={state ? "#F9AF56" : "#5A6175" }
          maximumTrackTintColor="#E5E9F3"
          value={brightness || 0.6}
        />
        <Feather name="sun" size={28} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  slideWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})