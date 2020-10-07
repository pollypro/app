import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 18,
    height: '100%',
    flex: 1,
  },
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    borderColor: '#2662f0',
  },
  test: {
    backgroundColor: '#fafbfd',
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  testMargin: {
    marginBottom: 20,
  },
  testName: {
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
