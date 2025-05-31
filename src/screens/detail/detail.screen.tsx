import {useEffect, useCallback, useState} from 'react';

import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AppStackRouter, AppStackRoutes} from '../../routes';
import {getMovieDetail} from '../../api/movies.api';
import {MovieDetail} from '../../api/movie.api.types';
import {adaptMovieDetailResponse} from '../../api/adapters/movie.adapter';
import {Header} from '../../components/ui/Header';
import {InfoRow} from '../../components/ui/InfoRow';
import {APP_STRINGS} from '../../constants';
import {COLORS} from '../../assets';
import {extractYearFromDate} from '../../utils';
import {SaveIcon} from '../../assets/icons/save.icon';
import {ClockIcon} from '../../assets/icons/clock.icon';
import {TicketIcon} from '../../assets/icons/ticket.icon';
import {CalendarIcon} from '../../assets/icons/calendar.icon';
import {StarIcon} from '../../assets/icons/star.icon';
import {useAppDispatch} from '../../hooks';
import {
  addToWatchlist,
  removeFromWatchlist,
} from '../../store/watchlist/watchlist.slice';
import {
  selectIsInWatchlist,
  selectMovieInWatchlist,
} from '../../store/watchlist/watchlist.selector';
import styles from './detail.screen.styles';

export const DetailScreen = () => {
  const {params} =
    useRoute<RouteProp<AppStackRouter, AppStackRoutes.DETAIL_SCREEN>>();
  const {movieId} = params;

  const dispatch = useAppDispatch();
  const isInWatchlist = useSelector(selectIsInWatchlist(movieId));
  const movieInWatchlist = useSelector(selectMovieInWatchlist(movieId));
  const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(
    movieInWatchlist,
  );
  const [isLoading, setIsLoading] = useState(isInWatchlist ? false : true);

  const handleGetMovieDetails = useCallback(async () => {
    try {
      const movieDetailResponse = await getMovieDetail(movieId);
      setMovieDetails(adaptMovieDetailResponse(movieDetailResponse.data));
    } catch (error) {
      Alert.alert(APP_STRINGS.ERROR, APP_STRINGS.ERROR_GETTING_MOVIE_DETAILS);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  const onToggleWatchList = () => {
    if (movieDetails) {
      if (isInWatchlist) {
        dispatch(removeFromWatchlist(movieId));
      } else {
        dispatch(addToWatchlist(movieDetails));
      }
    }
  };

  useEffect(() => {
    if (!isInWatchlist) {
      handleGetMovieDetails();
    }
  }, [handleGetMovieDetails, isInWatchlist]);

  return (
    <View style={styles.container}>
      <Header
        title={APP_STRINGS.DETAIL}
        onRightIconPress={onToggleWatchList}
        rightIcon={
          <SaveIcon
            fill={COLORS.WHITE}
            stroke={isInWatchlist ? COLORS.WHITE : 'none'}
          />
        }
      />
      {isLoading ? (
        <View style={styles.containerLoader}>
          <ActivityIndicator size="large" color={COLORS.WHITE} />
        </View>
      ) : (
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.previewContainer}>
            <View style={styles.ratingContainer}>
              <StarIcon />
              <Text style={styles.ratingText}>
                {Number(movieDetails?.vote_average).toFixed(1)}
              </Text>
            </View>
          </View>
          <View style={styles.headerContainer}>
            <Image
              resizeMode="contain"
              source={{uri: movieDetails?.poster_path}}
              style={styles.posterImage}
            />
            <Text style={styles.movieTitle} numberOfLines={2}>
              {movieDetails?.title}
            </Text>
          </View>
          <View style={styles.containerInfo}>
            <InfoRow
              Icon={<CalendarIcon />}
              text={extractYearFromDate(movieDetails?.release_date || '')}
            />
            <View style={styles.separator} />
            <InfoRow
              Icon={<ClockIcon />}
              text={`${movieDetails?.runtime} minutes`}
            />
            <View style={styles.separator} />
            <InfoRow
              Icon={<TicketIcon />}
              text={
                movieDetails?.genres && movieDetails.genres.length > 0
                  ? movieDetails.genres[0].name
                  : 'N/A'
              }
            />
          </View>
          <Text style={styles.overViewText}>{movieDetails?.overview}</Text>
        </ScrollView>
      )}
    </View>
  );
};
