import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
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
