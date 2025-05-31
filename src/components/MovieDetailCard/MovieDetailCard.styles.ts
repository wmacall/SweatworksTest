import {StyleSheet} from 'react-native';
import {resize} from '../../utils';
import {COLORS} from '../../assets';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: resize.scaleWidth(12),
    alignItems: 'center',
  },
  containerContent: {
    flex: 1,
  },
  title: {
    color: COLORS.WHITE,
    fontSize: resize.scaleFont(16),
    fontWeight: '400',
  },
  posterImage: {
    width: resize.scaleWidth(95),
    height: resize.scaleHeight(120),
    borderRadius: resize.scaleWidth(16),
  },
  containerInfo: {
    gap: resize.scaleHeight(4),
    marginTop: resize.scaleHeight(14),
  },
});
