import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {BASE_WIDTH, resize} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  previewContainer: {
    height: resize.scaleHeight(210),
    width: '100%',
    backgroundColor: COLORS.LIGHT_GREY,
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: resize.scaleWidth(8),
    gap: resize.scaleWidth(4),
    paddingVertical: resize.scaleHeight(4.5),
    marginRight: resize.scaleWidth(11),
    marginBottom: resize.scaleHeight(8),
    backgroundColor: COLORS.PRIMARY,
    borderRadius: resize.scaleWidth(8),
    position: 'absolute',
  },
  ratingText: {
    color: COLORS.ORANGE,
    fontSize: resize.scaleFont(12),
    fontWeight: '600',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: resize.scaleWidth(29),
    gap: resize.scaleWidth(12),
    paddingTop: resize.scaleHeight(151),
    paddingBottom: resize.scaleHeight(16),
    alignItems: 'flex-end',
  },
  posterImage: {
    height: resize.scaleHeight(120),
    width: resize.scaleWidth(95),
    borderRadius: resize.scaleWidth(16),
    backgroundColor: COLORS.LIGHT_GREY,
  },
  movieTitle: {
    color: COLORS.WHITE,
    fontSize: resize.scaleFont(18),
    fontWeight: '600',
    flex: 1,
  },
  overViewText: {
    color: COLORS.WHITE,
    fontSize: resize.scaleFont(12),
    paddingLeft: resize.scaleWidth(38),
    paddingRight: resize.scaleWidth(20),
    paddingTop: resize.scaleHeight(29),
  },
  containerInfo: {
    flexDirection: 'row',
    gap: resize.scaleWidth(12),
    alignSelf: 'center',
    alignItems: 'center',
  },
  separator: {
    width: resize.scaleWidth(1),
    height: resize.scaleHeight(12),
    backgroundColor: COLORS.LIGHT_GREY,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webView: {
    height: resize.scaleHeight(210),
    width: BASE_WIDTH,
    backgroundColor: COLORS.LIGHT_GREY,
  },
});
