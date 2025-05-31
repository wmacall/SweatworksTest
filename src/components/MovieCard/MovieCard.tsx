import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../../api/movie.api.types';
import {FC} from 'react';
import {resize} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp, AppStackRoutes} from '../../routes';

interface MovieCardProps extends Movie {}

export const MovieCard: FC<MovieCardProps> = ({poster_path, id}) => {
  const {navigate} = useNavigation<AppNavigationProp>();

  const handlePressMovie = () => {
    navigate(AppStackRoutes.DETAIL_SCREEN, {
      movieId: id,
    });
  };

  return (
    <TouchableOpacity onPress={handlePressMovie} activeOpacity={0.7}>
      <View>
        <Image source={{uri: poster_path}} style={styles.posterImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    height: resize.scaleHeight(210),
    width: resize.scaleWidth(145),
    borderRadius: resize.scaleWidth(16),
  },
});
