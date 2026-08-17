import { FC, useEffect } from 'react';
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
import { FullVideoScreenView } from '@screens/fullVideoScreen/FullVideoScreenView.tsx';
import Share from 'react-native-share';

export type FullScreenVideoProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.FULL_VIDEO_SCREEN>,
  any
>;
export const FullVideoScreen: FC<FullScreenVideoProps> = (props) => {
  const { navigation } = props;

  const url: string = useAppSelector(getUrl);
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

  const shareFile = async () => {
    try {
      if (!url) {
        return;
      }
      let videoPath = url;

      if (Platform.OS === 'android' && url.startsWith('content://')) {
        try {
          const fileInfo = await ReactNativeBlobUtil.fs.stat(url);
          const fileName = fileInfo.filename || `video_${Date.now()}.mp4`;

          const tempPath = `${ReactNativeBlobUtil.fs.dirs.CacheDir}/${fileName}`;

          await ReactNativeBlobUtil.fs.cp(url, tempPath);
          videoPath = `file://${tempPath}`;
        } catch (copyError) {
          console.error('Copy error:', copyError);
          return;
        }
      }

      const shareOptions = {
        url: videoPath,
        type: 'video/mp4',
        filename: `video_${Date.now()}.mp4`,
        showAppsToView: true,
      };

      await Share.open(shareOptions);

      if (Platform.OS === 'android' && videoPath.includes('temp_')) {
        try {
          await ReactNativeBlobUtil.fs.unlink(videoPath.replace('file://', ''));
        } catch (cleanupError) {
          console.log('Cleanup error:', cleanupError);
        }
      }
    } catch (error) {
      console.error('Video share error:', error);
    }
  };

  return (
    <FullVideoScreenView
      url={url}
      backToDownloadStackScreen={backToDownloadStackScreen}
      deleteFile={deleteFile}
      shareFile={shareFile}
    />
  );
};
