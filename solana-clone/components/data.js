import Octicons from '@expo/vector-icons/Octicons'

export const smartData = {
  entryWay: {
    name: 'EntryWay',
    smartItems: {
      lights: [
        {
          place: "Dining Table",
          icon: {name: "light-bulb", type: Octicons },
          color: { background: '#FEF7ED', icon: '#F79929'},
          brightness: 0.8,
          activityState: true,
        },
        {
          place: "Sofa Light",
          icon: {name: "light-bulb", type: Octicons },
          color: {background: '#EAF7FB', icon: '#33B6DB'},
          brightness: 0.4,
          activityState: true,
        },
        {
          place: "Lamp",
          icon: {name: "light-bulb", type: Octicons },
          color: { background: '#EAF7FB', icon: '#13ABD5'},
          brightness: 0.6,
          activityState: false,
        }
      ]
    }
  },
  livingRoom: {
    name: 'Living Room',
    smartItems: {
      lights: [
        {
          place: "Dining Table",
          icon: {name: "light-bulb", type: Octicons },
          color: { background: '#FEF7ED', icon: '#F79929'},
          brightness: 0.8,
          activityState: true,
        },
        {
          place: "Sofa Light",
          icon: {name: "light-bulb", type: Octicons },
          color: {background: '#EAF7FB', icon: '#33B6DB'},
          brightness: 0.4,
          activityState: true,
        },
        {
          place: "Lamp",
          icon: {name: "light-bulb", type: Octicons },
          color: { background: '#EAF7FB', icon: '#13ABD5'},
          brightness: 0.6,
          activityState: false,
        }
      ]
    }
  }
}