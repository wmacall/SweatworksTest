import {Text, View} from 'react-native';
import styles from './search.screen.styles';
import {Header} from '../../components/ui/Header/Header';
import {APP_STRINGS} from '../../constants';
import {InfoIcon} from '../../assets/icons/info.icon';

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={APP_STRINGS.SEARCH} rightIcon={<InfoIcon />} />
      <Text>Search Screen</Text>
    </View>
  );
};
