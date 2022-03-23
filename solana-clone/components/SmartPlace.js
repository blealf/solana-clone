
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
import { useState } from 'react'

export default function SmartPlace() {
  const tabs = ['Lights', 'Scenes', 'Color', 'Temp']
  const [tab, setTab] = useState(tabs[0])

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
          <BrightnessSlider state={true}/>
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
      <View style={{marginTop: 15}}>
          <SmartPlacesList 
            place="Dining Table" 
            icon="light-bulb"
            iconType={Octicons}
            color={{ background: '#FEF7ED', icon: '#F79929'}}
            brightness={0.8}
            activityCount={1}
            activityNotVisible
          />
          <SmartPlacesList 
            place="Sofa Light" 
            icon="light-bulb"
            iconType={Octicons}
            color={{ background: '#EAF7FB', icon: '#33B6DB'}}
            brightness={0.4}
            activityCount={1}
            activityNotVisible
          />
          <SmartPlacesList 
            place="Lamp" 
            icon="light-bulb"
            iconType={Octicons}
            color={{ background: '#EAF7FB', icon: '#13ABD5'}}
            brightness={0.6}
            activityCount={0}
            activityNotVisible
          />
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