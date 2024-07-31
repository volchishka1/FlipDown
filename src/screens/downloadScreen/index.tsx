import { FC, useCallback, useEffect, useState } from 'react';

import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';

import { DownloadScreenView } from './downloadScreenView';
import { ROUTES } from '@constants';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types';

export type DownloadScreenComponentProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.DOWNLOAD_SCREEN>,
  any
>;

export const DownloadScreen: FC<DownloadScreenComponentProps> = ({ navigation }) => {
  const [photos, setPhotos] = useState<PhotoIdentifier[] | undefined>([]);
  const fetchPhotos = useCallback(async () => {
    const res = await CameraRoll.getPhotos({
      first: 1000,
      assetType: 'Videos',
      groupTypes: 'Album',
      groupName: 'FlipTok',
      include: ['fileSize', 'playableDuration'],
    });
    setPhotos(res?.edges);
  }, []);

  const navigateToFullVideoScreen = () => {
    navigation.navigate(ROUTES.FULL_VIDEO_SCREEN);
  };

  useEffect(() => {
    fetchPhotos()
      .then()
      .catch(() => {});
  }, [fetchPhotos, photos]);

  return (
    <DownloadScreenView photos={photos} navigateToFullVideoScreen={navigateToFullVideoScreen} />
  );
};
