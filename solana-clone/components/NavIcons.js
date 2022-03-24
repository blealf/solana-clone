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
import { useEffect } from 'react/cjs/react.production.min';

const navLinks = {
  Home: {
    name: 'Home',
    icon: { name: 'home', type: MaterialIcons },
  },
  Scenes: {
    name: 'Scenes',
    icon: { name: 'dome-light', type: MaterialCommunityIcons }
  },
  Schedule: {
    name: 'Schedule',
    icon: { name: 'ios-time-outline', type: Ionicons }
  },
  Manage: {
    name: 'Manage',
    icon: { name: 'settings', type: Octicons }
  },
  Me: {
    name: 'Me',
    icon: { name: 'person-outline', type: Ionicons }
  },
}

export default function NavIcons({ name }) {
  const [activeLink, setActiveLink] = useState('Home')
  const [item, setItem] = useState(navLinks.Home)

  useEffect(() => {
    setItem(navLinks[name])
  }, [name])


  return (
    <TouchableOpacity
      style={styles.bottomIcons}
      key={item.name}
      onPress={() => setActiveLink(item.name)}
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
  )
}

const styles = StyleSheet.create({
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
