import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={{ alignItems: 'center'}}>
      <View style={styles.mainTitle}>
        <View style={styles.titleWrap}>
          <Text style={styles.titleText}>My Home</Text>
        </View>
        <Ionicons name="chevron-down" size={28}></Ionicons>
      </View>
      <View style={styles.addSmartWrap}>
        <View style={styles.iconText}>
          <TouchableOpacity style={styles.addSmart}>
            <Ionicons name="bulb-outline" size={30}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.smartText}>Add Smart Bulb</Text>
        </View>
        <View style={styles.iconText}>
          <TouchableOpacity style={styles.addSmart}>
            <Ionicons name="add" size={30}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.smartText}>Add</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 70,
    marginBottom: 30,
  },
  titleWrap: {
     marginHorizontal: 10,
  },
  titleText: {
    fontSize: 38,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  addSmartWrap: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconText: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 15,
    width: 120
  },
  addSmart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 70,
    width: 70,
    borderRadius: 35,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    elevation: 0,
    shadowRadius: 3.5,
  },
  smartText: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 10,
  },
});