import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {resize} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  containerEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEmpty: {
    width: resize.scaleWidth(76),
    height: resize.scaleHeight(76),
  },
  textTitle: {
    color: COLORS.WHITE,
    fontSize: resize.scaleFont(16),
    fontWeight: '600',
    marginTop: resize.scaleHeight(16),
  },
  textSubtitle: {
    color: COLORS.LIGHT_GREY,
    fontSize: resize.scaleFont(12),
    fontWeight: '500',
    textAlign: 'center',
    marginTop: resize.scaleHeight(8),
  },
});
