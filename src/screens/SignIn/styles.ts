import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 38,
  },
  list: { width: 300, marginBottom: 29 },
  submitButton: { borderRadius: 20, backgroundColor: '#2662F0', width: 126, height: 36 },
  submitButtonActive: { backgroundColor: '#0f4cdd' },
  submitButtonText: { color: 'white', fontSize: 14 },
});
