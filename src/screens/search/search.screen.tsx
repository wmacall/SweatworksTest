import {FlatList, Image, Text, View} from 'react-native';
import styles from './search.screen.styles';
import {Header} from '../../components/ui/Header';
import {APP_STRINGS} from '../../constants';
import {InfoIcon} from '../../assets/icons/info.icon';
import {Input} from '../../components/ui/Input';
import {useState, useRef} from 'react';
import {searchMovies} from '../../api/movies.api';
import {Movie} from '../../api/movie.api.types';
import {adaptMovieResponse} from '../../api/adapters/movie.adapter';
import {MovieDetailCard} from '../../components/MovieDetailCard';

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const [results, setResults] = useState<Movie[]>([]);

  const handleSearchMovies = async (query: string) => {
    try {
      const response = await searchMovies(query);
      setResults(adaptMovieResponse(response.data.results));
    } catch (error) {
      console.log('Error searching movies:', error);
    }
  };

  const handleChange = (text: string) => {
    setSearchQuery(text);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      handleSearchMovies(text);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Header title={APP_STRINGS.SEARCH} rightIcon={<InfoIcon />} />
      <View style={styles.containerContent}>
        <Input value={searchQuery} onChangeText={handleChange} />
        {results.length > 0 ? (
          <FlatList
            data={results}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item}) => <MovieDetailCard {...item} />}
          />
        ) : null}
        {results.length === 0 && searchQuery ? (
          <View style={styles.emptyList}>
            <Image source={require('../../assets/images/empty_search.png')} />
            <Text style={styles.textTitle}>{APP_STRINGS.WE_ARE_SORRY}</Text>
            <Text style={styles.textSubtitle}>
              {APP_STRINGS.FIND_YOUR_MOVIE}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
