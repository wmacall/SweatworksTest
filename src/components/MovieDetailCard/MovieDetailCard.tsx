import {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MovieDetail} from '../../api/movie.api.types';
import {extractYearFromDate} from '../../utils';
import {InfoRow} from '../ui/InfoRow/InfoRow';
import {CalendarIcon} from '../../assets/icons/calendar.icon';
import {ClockIcon} from '../../assets/icons/clock.icon';
import {TicketIcon} from '../../assets/icons/ticket.icon';
import {COLORS} from '../../assets';
import {StarIcon} from '../../assets/icons/star.icon';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp, AppStackRoutes} from '../../routes';
import styles from './MovieDetailCard.styles';

interface MovieDetailCardProps extends MovieDetail {}

export const MovieDetailCard: FC<MovieDetailCardProps> = ({
  poster_path,
  title,
  release_date,
  runtime,
  genres,
  id,
}) => {
  const {navigate} = useNavigation<AppNavigationProp>();

  const handlePressMovie = () =>
    navigate(AppStackRoutes.DETAIL_SCREEN, {movieId: id});

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlePressMovie}
      style={styles.container}>
      <Image source={{uri: poster_path}} style={styles.posterImage} />
      <View style={styles.containerContent}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.containerInfo}>
          <InfoRow
            variant="rate"
            Icon={<StarIcon stroke={COLORS.ORANGE} />}
            text={extractYearFromDate(release_date || '')}
          />
          <InfoRow
            variant="detail"
            Icon={<CalendarIcon stroke={COLORS.WHITE} />}
            text={extractYearFromDate(release_date || '')}
          />
          <InfoRow
            variant="detail"
            Icon={<ClockIcon stroke={COLORS.WHITE} />}
            text={`${runtime} minutes`}
          />
          <InfoRow
            variant="detail"
            Icon={<TicketIcon stroke={COLORS.WHITE} />}
            text={genres && genres.length > 0 ? genres[0].name : 'N/A'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
