import {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../../assets';
import {APP_STRINGS} from '../../../constants';
import {TabsNavigatorRoutes} from '../../../routes';
import {resize} from '../../../utils';
import {HomeIcon} from '../../../assets/icons/home.icon';
import {SearchIcon} from '../../../assets/icons/search.icon';
import {SaveIcon} from '../../../assets/icons/save.icon';

const tabs = [
  {
    name: APP_STRINGS.HOME,
    route: TabsNavigatorRoutes.HOME_SCREEN,
    Icon: HomeIcon,
  },
  {
    name: APP_STRINGS.SEARCH,
    route: TabsNavigatorRoutes.SEARCH_SCREEN,
    Icon: SearchIcon,
  },
  {
    name: APP_STRINGS.WATCH_LIST,
    route: TabsNavigatorRoutes.WATCH_LIST_SCREEN,
    Icon: SaveIcon,
  },
];

interface TabBarProps extends BottomTabBarProps {}

export const TabBar: FC<TabBarProps> = ({state, navigation}) => {
  const handleNavigate = (route: string) => navigation.navigate(route);

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = index === state.index;
        const Icon = tab.Icon;
        return (
          <Pressable
            key={tab.route}
            style={styles.tab}
            onPress={() => handleNavigate(tab.route)}>
            <View style={styles.icon}>
              <Icon fill={isActive ? COLORS.BLUE : COLORS.LIGHT_GREY} />
            </View>
            <Text
              style={[
                styles.text,
                {
                  color: isActive ? COLORS.BLUE : COLORS.LIGHT_GREY,
                },
              ]}>
              {tab.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.PRIMARY,
    height: resize.scaleHeight(78),
    flexDirection: 'row',
    borderTopColor: COLORS.BLUE,
    borderTopWidth: resize.scaleHeight(2),
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: resize.scaleWidth(8),
  },
  icon: {
    width: resize.scaleWidth(20),
    height: resize.scaleHeight(20),
  },
  text: {
    fontSize: resize.scaleFont(12),
    fontWeight: '500',
  },
});
