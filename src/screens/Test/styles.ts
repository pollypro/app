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
  questionBlock: {
    marginVertical: 20,
  },
  questionText: {
    fontSize: 16,
    color: '#414D55',
    lineHeight: 20,
  },
  delimiter: {
    borderBottomWidth: 1,
    borderBottomColor: '#a2c0d4',
    borderRadius: 1,
    marginVertical: 20,
  },
});
