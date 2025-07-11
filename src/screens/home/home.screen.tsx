import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../../store/movies/movies.slice';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './home.screen.styles';
import {Movie} from '../../api/movie.api.types';
import {useAppDispatch} from '../../hooks';
import {selectMoviesList} from '../../store/movies/movies.selector';
import {APP_STRINGS} from '../../constants';
import {MovieCard} from '../../components/MovieCard/MovieCard';
import {Input} from '../../components/ui/Input';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {resize} from '../../utils';

const tabs = [
  APP_STRINGS.NOW_PLAYING,
  APP_STRINGS.UPCOMING,
  APP_STRINGS.TOP_RATED,
];

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {movies, nowPlayingMovies, topRatedMovies, upcomingMovies} =
    useSelector(selectMoviesList);
  const [activeTab, setActiveTab] = useState(0);

  const tabIndicatorPosition = useSharedValue(0);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  useEffect(() => {
    tabIndicatorPosition.value = withTiming(activeTab * resize.scaleWidth(119));
  }, [activeTab, tabIndicatorPosition]);

  const tabIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{translateX: tabIndicatorPosition.value}],
  }));

  const moviesByTab: Record<string, Movie[]> = {
    0: nowPlayingMovies,
    1: upcomingMovies,
    2: topRatedMovies,
  };

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
        <View style={styles.tabContainer}>
          <Animated.View style={[styles.tabIndicator, tabIndicatorStyle]} />
          {tabs.map((tab, index) => (
            <Pressable
              key={index}
              style={styles.tab}
              onPress={() => setActiveTab(index)}>
              <Text style={styles.tabText}>{tab}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.containerSection}>
          {moviesByTab[activeTab].map((movie: Movie) => (
            <Animated.View
              key={movie.id}
              entering={FadeIn}
              exiting={FadeOut}>
              <MovieCard {...movie} style={styles.cardSection} />
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
