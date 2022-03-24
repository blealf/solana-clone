import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './solana-clone/screens/Home.js'
import SmartPlace from './solana-clone/components/SmartPlace.js'
import Scenes from './solana-clone/screens/Scenes.js'
import BottomNav from './solana-clone/components/BottomNav.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './solana-clone/shared/rootNavigation'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            locations={[0, 0.5]}
            colors={['#fff', '#EFF1F6']} 
            style={styles.linearGradient}
          >
            <NavigationContainer ref={navigationRef}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Scenes" component={Scenes} />
                <Stack.Screen name="SmartPlace" component={SmartPlace} />
              </Stack.Navigator>
            </NavigationContainer>
          </LinearGradient>
        </ScrollView>
        <BottomNav />
        <StatusBar style="auto" />
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
    minHeight: '100%'
  },
});
