import { FC, useCallback, useEffect, useState } from 'react';

import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';

import { DownloadScreenView } from './downloadScreenView';
import { ROUTES } from '@constants';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { setUrl } from '@root/store/actions.ts';
import { useAppDispatch } from '@root/hooks/hooks.ts';

export type DownloadScreenComponentProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.DOWNLOAD_SCREEN>,
  any
>;

export const DownloadScreen: FC<DownloadScreenComponentProps> = ({ navigation }) => {
  const [photos, setPhotos] = useState<PhotoIdentifier[] | undefined>([]);
  const dispatch = useAppDispatch();
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

  const navigateToFullVideoScreen = (img: any) => {
    dispatch(setUrl(img));
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
