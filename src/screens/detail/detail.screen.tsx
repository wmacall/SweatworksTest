import {RouteProp, useRoute} from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {AppStackRouter, AppStackRoutes} from '../../routes';
import {useEffect, useCallback, useState} from 'react';
import {getMovieDetail} from '../../api/movies.api';
import {MovieDetail} from '../../api/movie.api.types';
import {adaptMovieDetailResponse} from '../../api/adapters/movie.adapter';
import styles from './detail.screen.styles';
import {Header} from '../../components/ui/Header/Header';
import {APP_STRINGS} from '../../constants';
import {SaveIcon} from '../../assets/icons/save.icon';
import {COLORS} from '../../assets';
import {extractYearFromDate} from '../../utils';
import {InfoRow} from '../../components/ui/InfoRow/InfoRow';
import {ClockIcon} from '../../assets/icons/clock.icon';
import {TicketIcon} from '../../assets/icons/ticket.icon';
import {CalendarIcon} from '../../assets/icons/calendar.icon';
import {StarIcon} from '../../assets/icons/star.icon';

export const DetailScreen = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(null);
  const {params} =
    useRoute<RouteProp<AppStackRouter, AppStackRoutes.DETAIL_SCREEN>>();
  const {movieId} = params;
  const [isLoading, setIsLoading] = useState(true);

  const handleGetMovieDetails = useCallback(async () => {
    try {
      const movieDetailResponse = await getMovieDetail(movieId);
      setMovieDetails(adaptMovieDetailResponse(movieDetailResponse.data));
    } catch (error) {
      Alert.alert(
        'Error',
        'Failed to fetch movie details. Please try again later.',
      );
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    handleGetMovieDetails();
  }, [handleGetMovieDetails]);

  return (
    <View style={styles.container}>
      <Header
        title={APP_STRINGS.DETAIL}
        rightIcon={<SaveIcon fill={COLORS.WHITE} />}
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
