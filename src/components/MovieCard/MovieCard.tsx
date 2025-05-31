import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../../api/movie.api.types';
import {FC} from 'react';
import {resize} from '../../utils';

interface MovieCardProps extends Movie {}

export const MovieCard: FC<MovieCardProps> = ({poster_path}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
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
