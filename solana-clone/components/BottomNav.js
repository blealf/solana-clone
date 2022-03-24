import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import Octicons from '@expo/vector-icons/Octicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { navigate } from '../shared/rootNavigation';


export default function BottomNav() {
  const [activeLink, setActiveLink] = useState('Home')

  const handlePress = (name) => {
    navigate(name)
    setActiveLink(name)
  }
  return (
    <View style={styles.bottomNav}>
      {navLinks.map((item) => (
        <TouchableOpacity
          style={styles.bottomIcons}
          key={item.name}
          onPress={() => handlePress(item.name)}
        >
          <item.icon.type
            name={item.icon.name}
            size={28}
            color={activeLink === item.name ? '#D1A8B7' : '#5A6175'}
          />
          <Text
            style={[
              styles.bottomIconText,
              { color: activeLink === item.name ? '#D1A8B7' : '#5A6175' }
            ]}
          >{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  bottomNav: {
    // position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    bottom: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 30,
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: -3
    },
    elevation: 2,
  },
  bottomIcons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIconText: {
    color: '#5A6175',
    marginTop: 5,
    fontWeight: '500',
  }
})

const navLinks = [
  {name: 'Home',icon: { name: 'home', type: MaterialIcons},},
  {name: 'Scenes',icon: { name: 'dome-light', type: MaterialCommunityIcons}},
  {name: 'Schedule',icon: { name: 'ios-time-outline', type: Ionicons}},
  {name: 'Manage',icon: { name: 'settings', type: Octicons}},
  {name: 'Me',icon: { name: 'person-outline', type: Ionicons}},
]
const navIcons = {
  Home: { name: 'home', type: MaterialIcons},
  Scenes: { name: 'dome-light', type: MaterialCommunityIcons},
  Schedule: { name: 'ios-time-outline', type: Ionicons},
  Manage: { name: 'settings', type: Octicons},
  Me: { name: 'person-outline', type: Ionicons},
}