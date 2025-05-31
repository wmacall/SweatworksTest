import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {fetchPopularMovies} from '../../store/movies/movies.slice';
import {Text, View} from 'react-native';
import styles from './home.screen.styles';
import {Movie} from '../../api/movie.api.types';
import {useAppDispatch} from '../../hooks';
import {selectMoviesList} from '../../store/movies/movies.selector';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const movies = useSelector(selectMoviesList);

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchPopularMovies());
    }
  }, [dispatch, movies.length]);

  console.log('movies', JSON.stringify(movies));
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      {movies.map((movie: Movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </View>
  );
};
