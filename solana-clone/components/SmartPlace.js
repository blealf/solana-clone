
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { globalStyles } from '../shared/globalStyles.js';
import BrightnessSlider from '../shared/BrightnessSlider';
import SmartPlacesList from './SmartPlacesList';
import SmartItem from './SmartItem';
import { useState, useEffect } from 'react'
import { smartData } from './data'

export default function SmartPlace() {
  const tabs = ['Lights', 'Scenes', 'Color', 'Temp']
  const [tab, setTab] = useState(tabs[0])
  const [lights, setLights] = useState(smartData['entryWay'].smartItems.lights)

  const [activity, setActivity] = useState(true)

  useEffect(() => {
    const allStatus = Array.from(lights.map(item => item.activityState))
    setActivity(allStatus.every((entry) => !entry) ? false : true)
  }, [lights])

  return (
    <View>
      <View style={{backgroundColor:'#fff'}}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>Living Room</Text>
        </View>
        <View style={globalStyles.addSmartWrap}>
          <View style={globalStyles.iconText}>
            <TouchableOpacity style={[globalStyles.addSmart, {backgroundColor:'#F5F8FA'}]}>
              <Ionicons name="bulb-outline" size={30} />
            </TouchableOpacity>
            <Text style={globalStyles.smartText}>New Scene</Text>
          </View>
          <View style={globalStyles.iconText}>
            <TouchableOpacity style={[globalStyles.addSmart, {backgroundColor:'#F5F8FA'}]}>
              <Octicons name="light-bulb" size={30} />
            </TouchableOpacity>
            <Text style={globalStyles.smartText}>Add Smart Bulb</Text>
          </View>
          <View style={globalStyles.iconText}>
            <TouchableOpacity style={[globalStyles.addSmart, {backgroundColor:'#F5F8FA'}]}>
              <Octicons name="settings" size={30} />
            </TouchableOpacity>
            <Text style={globalStyles.smartText}>Manage</Text>
          </View>
        </View>
        <View style={{marginVertical: 40}}>
          <BrightnessSlider state={activity}/>
        </View>
        <View style={styles.tabWrap}>
          {tabs.map((item, index) => (
            <TouchableOpacity
              style={[styles.tabPress, {
                borderBottomColor: item === tab ? '#D1A8B7' : null,
                borderBottomWidth: item === tab ? 3 : 0,
              }]}
              onPress={() => setTab(item)}
              key={item}
            >
              <Text
                style={[styles.tabText, { color: item === tab ? '#D1A8B7' : null }]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        {lights.map((item) => (
          <SmartItem 
            key={item.place}
            place={item.place}
            icon={item.icon}
            color={item.color}
            brightness={item.brightness}
            activityState={item.activityState}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '600'
  },
  tabWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabPress: {
    marginHorizontal: 5,
    padding: 15,
    borderBottomEndRadius: 3,
  },
  tabText: {
    fontSize: 22
  },
})