
import { StyleSheet, View, Text, Switch, TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState, useEffect } from 'react'
import BrightnessSlider from '../shared/BrightnessSlider';

export default function SmartPlacesList({ 
  place, 
  activityCount, 
  icon, 
  iconType, 
  color,
  brightness,
  activityNotVisible,
  navigation
}) {
  
  const [switchValue, setSwitchValue] = useState(false)
  const [activity, setActivity] = useState(false)
  
  useEffect(() => {
    setSwitchValue(activityCount > 0)
    setActivity(activityCount)
  }, [])
  
  const toggleSwitch = () => {
    setSwitchValue(!switchValue)
    setActivity(!switchValue ? Math.ceil(Math.random() * 10) : 0)
  }
  const IconType = iconType
  const activityText = (val) => {
    return val > 0 
      ?  val === 1 
        ? `${activity} light on`
        : `${activity} lights on`
      : 'All lights off'
  }

  const handlePress = () => {
    navigation ? navigation.navigate('SmartPlace') : null
  }

  return (
    <TouchableOpacity
      style={styles.smartWrap}
      onPress={() => handlePress()}
    >
      <View style={styles.smartItem}>
        <View style={[
          styles.smartItemIcon,
          { backgroundColor: switchValue ? color.background : '#F2F3F4'}]}>
          <IconType name={icon} size={25} color={switchValue ? color.icon : '#636A7D'}/>
        </View>
        <View style={[styles.smartPlaceWrap, {marginLeft: 10}]}>
          <Text style={styles.smartPlace}>{place}</Text>
          {
            !activityNotVisible
              ? <Text style={styles.smartActivity}>{activityText(activity)}</Text>
              : null
          }
          
        </View>
        <View style={styles.switchArea}>
          <Switch
            trackColor={{ false: '#8F96AA', true: '#29D277' }}
            thumbColor={['#fff', '#fff']}
            ios_background="#3e3e3e"
            value={switchValue}
            onValueChange={toggleSwitch}
            style={{marginRight: 10}}
          >
          </Switch>
          <FontAwesome5 name="chevron-right" size={25} color="#CFD2DF" />
        </View>
      </View>
        {
          brightness
          ? <View style={{ marginVertical: 10 }}>
            <BrightnessSlider
              brightness={brightness}
              state={switchValue}
              /></View>
          : null
        }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  smartWrap: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 2,
  },
  smartItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  smartItemIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 35,
  },
  smartPlace: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000'
  },
  smartActivity: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
    marginTop: 5,
  },
  switchArea: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
})