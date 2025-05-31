import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {fetchPopularMovies} from '../../store/movies/movies.slice';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './home.screen.styles';
import {Movie} from '../../api/movie.api.types';
import {useAppDispatch} from '../../hooks';
import {selectMoviesList} from '../../store/movies/movies.selector';
import {APP_STRINGS} from '../../constants';
import {MovieCard} from '../../components/MovieCard/MovieCard';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const movies = useSelector(selectMoviesList);

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchPopularMovies());
    }
  }, [dispatch, movies.length]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ScrollView>
        <Text style={styles.title}>
          {APP_STRINGS.WHAT_DO_YOU_WANT_TO_WATCH}
        </Text>
        <View>
          <FlatList
            data={movies}
            keyExtractor={(item: Movie) => item.id.toString()}
            contentContainerStyle={styles.contentContainerStyle}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <MovieCard {...item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};
