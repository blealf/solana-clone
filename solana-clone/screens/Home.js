import { View, StyleSheet, Text} from 'react-native';
import HomeHeader from '../components/HomeHeader.js'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SmartPlacesList from '../components/SmartPlacesList.js'

export default function Home({ navigation }) {
  return (
    <View>
      <HomeHeader />
      <View style={styles.smartItemsWrap}>
        <Text style={styles.smartItemsTitle}>Your Groups</Text>
        <SmartPlacesList 
          place="Entryway" 
          activityCount={1}
          icon="door-open"
          iconType={FontAwesome5}
          color={{ background: '#FEF7ED', icon: '#F79929' }}
          navigation={navigation}
        />
        <SmartPlacesList 
          place="Living Room" 
          activityCount={0}
          icon="event-seat"
          iconType={MaterialIcons}
          color={{ background: '#F2F3F4', icon: '#636A7D' }}
          navigation={navigation}
        />
        <SmartPlacesList 
          place="Living Room" 
          activityCount={3}
          icon="kitchen"
          iconType={MaterialIcons}
          color={{ background: '#EAF7FB', icon: '#13ABD5' }}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  smartItemsWrap: {
    marginTop: 60,
    justifyContent: 'flex-start',
  },
  smartItemsTitle: {
    textAlign: 'left',
    fontSize: 23,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
    marginBottom: 15,
  },
})
