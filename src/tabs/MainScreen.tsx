import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SearchSvg } from '@assets/search';
import { SettingSvg } from '@assets/setting';
import { ROUTES } from '@constants/routes';
import { InfoScreen } from '@screens/personalInfoScreen';
import { SearchScreen } from '@screens/searchScreen';
import { strings } from '@constants/textConst';
import { FolderSvg } from '@assets/folder';
import { DownloadStackNavigator } from '@root/stack/DownloadStack';
import { useAppSelector } from '@root/hooks/hooks';
import { getUrl } from '@root/store/homeScreen/selectors';
import { MainStackScreenNavigatorParamList } from '@navigation/types';

export const MainScreenTabNavigator = () => {
  const Tab = createBottomTabNavigator<MainStackScreenNavigatorParamList>();
  const url = useAppSelector(getUrl);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: { color: '#6563ff', fontSize: 12, fontFamily: 'Roboto-Medium' },
      }}
    >
      <Tab.Screen
        name={ROUTES.SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          tabBarLabel: `${strings.getString('search')}`,
          tabBarIcon: ({ focused }) => {
            return <SearchSvg />;
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.DOWNLOAD_STACK_SCREEN}
        component={DownloadStackNavigator}
        options={{
          tabBarStyle: { display: url ? 'none' : 'flex' },
          tabBarLabel: `${strings.getString('downloads')}`,
          tabBarIcon: (focused) => {
            return <FolderSvg />;
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.PERSONAL_INFO}
        component={InfoScreen}
        options={{
          tabBarLabel: `${strings.getString('information')}`,
          tabBarIcon: (focused) => {
            return <SettingSvg />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
