import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  service: {
    backgroundColor: '#fafbfd',
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  serviceMargin: {
    marginBottom: 20,
  },
  serviceName: {
    fontSize: 16,
    lineHeight: 20,
    color: '#414d55',
    fontFamily: 'Roboto-Regular',
  },
  delimiter: {
    borderBottomWidth: 1,
    borderBottomColor: '#a2c0d4',
    borderRadius: 1,
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#142e6e',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
  },
  button: {
    fontSize: 12,
    lineHeight: 20,
    color: '#2662f0',
    fontFamily: 'Rubik-Regular',
    fontWeight: 'normal',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
});
