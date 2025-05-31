import {Image, Text, View} from 'react-native';
import {Header} from '../../components/ui/Header/Header';
import {APP_STRINGS} from '../../constants';
import styles from './watchlist.screen.styles';
import {useSelector} from 'react-redux';
import {selectWatchlistMovies} from '../../store/watchlist/watchlist.selector';

export const WatchlistScreen = () => {
  const movies = useSelector(selectWatchlistMovies);
  console.log('WatchlistScree:', movies);
  return (
    <View style={styles.container}>
      <Header title={APP_STRINGS.WATCH_LIST} />
      <View style={styles.containerEmpty}>
        <Image
          style={styles.imageEmpty}
          resizeMode="contain"
          source={require('../../assets/images/empty_list.png')}
        />
        <Text style={styles.textTitle}>
          {APP_STRINGS.THERE_IS_NO_MOVIE_YET}
        </Text>
        <Text style={styles.textSubtitle}>{APP_STRINGS.FIND_YOUR_MOVIE}</Text>
      </View>
    </View>
  );
};
