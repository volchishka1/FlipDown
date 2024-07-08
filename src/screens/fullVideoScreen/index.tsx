import React, { FC, useEffect } from 'react';
import { Alert, BackHandler, Platform } from 'react-native';
import { ROUTES, strings } from '@constants';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { useAppDispatch, useAppSelector } from '@root/hooks/hooks';
import { getUrl } from '@root/store/homeScreen/selectors';
import { setUrl } from '@root/store/actions';
import { FullVideoScreenView } from '@screens/fullVideoScreen/fullVideoScreenView';

export type FullScreenVideoProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.FULL_VIDEO_SCREEN>,
  any
>;
export const FullVideoScreen: FC<FullScreenVideoProps> = (props) => {
  const { navigation } = props;

  const url = useAppSelector(getUrl);
  const dispatch = useAppDispatch();

  const backToDownloadStackScreen = () => {
    navigation.navigate(ROUTES.DOWNLOAD_SCREEN);
    dispatch(setUrl(''));
  };

  useEffect(() => {
    const onBackPress = () => {
      backToDownloadStackScreen();
      dispatch(setUrl(''));
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => backHandler.remove();
  }, []);

  const deleteFiles = async () => {
    Platform.OS === 'ios'
      ? await CameraRoll.deletePhotos([url])
      : ReactNativeBlobUtil.fs
          .unlink(url)
          .then()
          .catch((err) => {
            console.log(err);
          });
  };

  const deleteFile = () => {
    Alert.alert(`${strings.getString('do_you_want_to_delete_file')}`, '', [
      {
        isPreferred: true,
        text: `${strings.getString('yes')}`,
        onPress: () => {
          deleteFiles()
            .then(() => {
              Alert.alert(strings.getString('deleted_video'));
              backToDownloadStackScreen();
            })
            .catch(() => {});
        },
        style: 'default',
      },
      {
        isPreferred: false,
        text: `${strings.getString('no')}`,
        onPress: () => {},
        style: 'destructive',
      },
    ]);
  };

  return (
    <FullVideoScreenView
      url={url}
      backToDownloadStackScreen={backToDownloadStackScreen}
      deleteFile={deleteFile}
    />
  );
};
