import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {resize} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  containerContent: {
    paddingLeft: resize.scaleWidth(29),
    paddingRight: resize.scaleWidth(15),
    flex: 1,
  },
  contentContainerStyle: {
    gap: resize.scaleHeight(24),
    paddingVertical: resize.scaleHeight(24),
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
