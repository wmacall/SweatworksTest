import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../../store/movies/movies.slice';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './home.screen.styles';
import {Movie} from '../../api/movie.api.types';
import {useAppDispatch} from '../../hooks';
import {selectMoviesList} from '../../store/movies/movies.selector';
import {APP_STRINGS} from '../../constants';
import {MovieCard} from '../../components/MovieCard/MovieCard';
import {Input} from '../../components/ui/Input';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {movies, nowPlayingMovies, topRatedMovies, upcomingMovies} =
    useSelector(selectMoviesList);

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchPopularMovies());
      dispatch(fetchNowPlayingMovies());
      dispatch(fetchUpcomingMovies());
      dispatch(fetchTopRatedMovies());
    }
  }, [dispatch, movies]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            {APP_STRINGS.WHAT_DO_YOU_WANT_TO_WATCH}
          </Text>
          <Input />
        </View>
        <View>
          <FlatList
            data={movies}
            keyExtractor={(item: Movie) => item.id.toString()}
            contentContainerStyle={styles.contentContainerStyle}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <MovieCard style={styles.card} {...item} />}
          />
        </View>
        <View style={styles.containerSection}>
          {nowPlayingMovies.map((movie: Movie) => (
            <MovieCard {...movie} style={styles.cardSection} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
