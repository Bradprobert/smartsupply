import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.primaryGreen
  },
  brandContainer: {
    alignItems: 'center',
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 48,
    fontFamily: 'poiret-one-regular',
  },
  textInput: {
    height: 60,
    padding: 12,
    margin: 12,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.white,
    padding: 12,
    margin: 12,
    alignItems: 'center'
  }
});

export default styles;
