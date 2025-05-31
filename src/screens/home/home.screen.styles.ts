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
  },
  headerContainer: {
    paddingHorizontal: resize.scaleWidth(24),
    gap: resize.scaleHeight(24),
  },
  card: {
    height: resize.scaleHeight(210),
    width: resize.scaleWidth(145),
  },
  containerSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: resize.scaleWidth(13),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: resize.scaleHeight(20),
  },
  cardSection: {
    height: resize.scaleHeight(145),
    width: resize.scaleWidth(100),
  },
  scrollView: {
    paddingBottom: resize.scaleHeight(24),
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: resize.scaleWidth(24),
    position: 'relative',
    gap: resize.scaleHeight(28),
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: resize.scaleFont(14),
    fontWeight: '500',
    color: COLORS.WHITE,
    marginBottom: resize.scaleHeight(10),
  },
  tabIndicator: {
    position: 'absolute',
    height: 4,
    width: resize.scaleWidth(90),
    backgroundColor: COLORS.GREY,
    bottom: 0,
  },
});
