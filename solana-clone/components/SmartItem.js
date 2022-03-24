import { View } from 'react-native';
import SmartPlacesList from './SmartPlacesList';
import Octicons from '@expo/vector-icons/Octicons';

export default function SmartItem({
  place,
  icon,
  color,
  brightness,
  activityState,
}) {
  return (
    <View>
      <SmartPlacesList 
        place={place} 
        icon={icon.name}
        iconType={icon.type}
        color={color}
        brightness={brightness}
        activityCount={activityState ? 1 : 0}
        activityNotVisible
      />
    </View>
  )
}