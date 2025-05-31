import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Movie} from '../../api/movie.api.types';
import {FC} from 'react';
import {resize} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp, AppStackRoutes} from '../../routes';

interface MovieCardProps extends Movie {
  style?: StyleProp<ViewStyle>;
}

export const MovieCard: FC<MovieCardProps> = ({poster_path, id, style}) => {
  const {navigate} = useNavigation<AppNavigationProp>();

  const handlePressMovie = () => {
    navigate(AppStackRoutes.DETAIL_SCREEN, {
      movieId: id,
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePressMovie}
      style={[style]}
      activeOpacity={0.7}>
      <View>
        <Image source={{uri: poster_path}} style={styles.posterImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    height: '100%',
    borderRadius: resize.scaleWidth(16),
  },
});
