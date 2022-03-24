import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Vibration,
} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CircleSlider from 'react-native-circle-slider';
import { useState } from 'react';

const sceneItems = [
  {
    title: 'Everyday',
    subtitlle: 'All groups',
    icon: { name: 'sun', type: Feather },
    color: '#F79929',
    brightness: 1,
  },
  {
    title: 'Focus',
    subtitle: 'Master bedroom, Kitchen and 1 more',
    icon: { name: 'eye', type: Entypo },
    color: '#2FB5DA',
    brightness: 0.6,
  },
  {
    title: 'Relax',
    subtitle: 'Living Room',
    icon: { name: 'dome-light', type: MaterialCommunityIcons },
    color: '#F6A341',
    brightness: 0.6,
  },
  {
    title: 'Nightlight',
    subtitle: 'Master bedroom and Kid\'s bedroom',
    icon: { name: 'md-sunny-outline', type: Ionicons },
    color: '#4253B6',
    brightness: 0.1,
  },
]

export default function Scenes() {
  const [state, setState] = useState({ startAngle: 0, angleLength: 100})
  return (
    <View style={styles.container}>
      {sceneItems.map((sc) => (
        <TouchableOpacity style={styles.sceneItem} key={sc.title}>
          <TouchableOpacity
            style={styles.sceneMenu}
            onPress={() => Vibration.vibrate()}
          >
            <Ionicons
              name="ios-ellipsis-horizontal-outline" size={30}
              color="black" />
          </TouchableOpacity>
          <View style={styles.sceneIcon}>
            <sc.icon.type name={sc.icon.name} size={23} color={sc.color} />
            <View style={styles.iconMeter}>
              <CircleSlider
                value={sc.brightness * 359}
                dialRadius={25}
                dialWidth={3}
                btnRadius={1.5}
                meterColor={sc.color}
                textSize={1}
              />
            </View>
          </View>
          <Text style={styles.sceneTitle}>{sc.title}</Text>
          <Text style={styles.sceneSubtitle}>{sc.subtitle}</Text>
        </TouchableOpacity>
      ))}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap'
  },
  sceneItem: {
    position: 'relative',
    padding: 20,
    width: 180,
    height: 180,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 3
  },
  sceneMenu: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  sceneIcon: {
    paddingVertical: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconMeter: {
    position: 'absolute'
  },  
  sceneTitle: {
    fontSize: 25,
    fontWeight: '500',
    marginTop: 20,
    color: '#2D3745'
  },
  sceneSubtitle: {
    fontSize: 16,
    marginTop: 8,
    color: '#AEB2C1'
  }
})