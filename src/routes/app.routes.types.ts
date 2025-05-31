import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum TabsNavigatorRoutes {
  HOME_SCREEN = 'HomeScreen',
  SEARCH_SCREEN = 'SearchScreen',
  WATCH_LIST_SCREEN = 'WatchListScreen',
}

export enum AppStackRoutes {
  TABS_NAVIGATOR = 'TabsNavigator',
  DETAIL_SCREEN = 'DetailScreen',
}

export type TabsNavigatorRouter = {
  [TabsNavigatorRoutes.HOME_SCREEN]: undefined;
  [TabsNavigatorRoutes.SEARCH_SCREEN]: undefined;
  [TabsNavigatorRoutes.WATCH_LIST_SCREEN]: undefined;
};

export type AppStackRouter = {
  [AppStackRoutes.TABS_NAVIGATOR]: undefined;
  [AppStackRoutes.DETAIL_SCREEN]: {
    movieId: number;
  };
};

export type AppNavigationProp = NativeStackNavigationProp<AppStackRouter>;
