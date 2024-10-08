import { colors } from '@/styles';
import { FontVariant } from '@/types';
import { StyleSheet } from 'react-native';

const fontFamily: FontVariant = 'Urbanist-Regular';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
  inputArea: {
    zIndex: 1,
  },
  errorMessage: {
    fontSize: 14,
    color: '#9D0208',
  },
  occultedErrorMessage: {
    position: 'absolute',
    top: 0,
  },
  label: {
    color: colors.gray1,
    fontSize: 16,
    fontFamily,
    height: 22,
    marginLeft: 6,
  },
});
