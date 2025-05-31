import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {resize} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  title: {
    fontSize: resize.scaleFont(18),
    fontWeight: '600',
    color: COLORS.WHITE,
    paddingHorizontal: resize.scaleWidth(24),
  },
  contentContainerStyle: {
    gap: resize.scaleHeight(30),
    paddingHorizontal: resize.scaleWidth(24),
    paddingTop: resize.scaleHeight(21),
    paddingBottom: resize.scaleHeight(24),
    position: 'relative',
  },
  item: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});
