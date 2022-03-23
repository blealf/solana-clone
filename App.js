import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './solana-clone/screens/Home.js'
import SmartPlace from './solana-clone/components/SmartPlace.js'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          locations={[0, 0.3]}
          colors={['#fff', '#EFF1F6']} 
          style={styles.linearGradient}
        >
          <SmartPlace />
          <StatusBar style="auto" />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
