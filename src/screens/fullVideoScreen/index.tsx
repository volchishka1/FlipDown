import React, { FC, useEffect } from 'react';
import { Alert, BackHandler, Platform } from 'react-native';
import Share from 'react-native-share';
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
        Alert.alert(`${strings.getString('oops')}`, `${strings.getString('something_went_wrong')}`);
        return;
      }

      console.log('Original URL:', url);

      let shareUrl = url;
      let fileType = getFileType(url);

      if (Platform.OS === 'android') {
        if (url.startsWith('content://')) {
          try {
            const fileName = url.includes('.mp4')
              ? 'temp_video.mp4'
              : url.includes('.mp3')
              ? 'temp_audio.mp3'
              : 'temp_file';
            const tempPath = `${ReactNativeBlobUtil.fs.dirs.CacheDir}/${fileName}`;

            const response = await ReactNativeBlobUtil.fs.cp(url, tempPath);
            shareUrl = `file://${tempPath}`;

            console.log('Copied to temp file:', shareUrl);
          } catch (copyError) {
            console.error('Failed to copy file:', copyError);
            Alert.alert(
              `${strings.getString('oops')}`,
              `${strings.getString('something_went_wrong')}`,
            );
            return;
          }
        } else if (!url.startsWith('file://')) {
          shareUrl = `file://${url}`;
        }
      }

      const shareOptions = {
        title: 'Поделиться файлом',
        message: 'Посмотрите этот файл',
        url: shareUrl,
        type: fileType,
      };

      console.log('Final share options:', shareOptions);

      const result = await Share.open(shareOptions);

      if (result.success) {
        console.log('✅ File shared successfully');
      } else {
        console.log('Share cancelled or failed');
      }

      if (Platform.OS === 'android' && shareUrl.includes('temp_')) {
        try {
          await ReactNativeBlobUtil.fs.unlink(shareUrl.replace('file://', ''));
        } catch (cleanupError) {}
      }
    } catch (error: any) {
      let errorMessage = `${strings.getString('something_went_wrong')}`;

      if (error.message) {
        errorMessage = error.message;
      }

      Alert.alert(`${strings.getString('oops')}`, errorMessage);
    }
  };

  // Вспомогательная функция для определения типа файла
  const getFileType = (fileUrl: string): string => {
    const url = fileUrl.toLowerCase();

    if (url.includes('.mp4') || url.includes('.mov') || url.includes('.avi')) {
      return 'video/mp4';
    } else if (url.includes('.mp3') || url.includes('.m4a') || url.includes('.wav')) {
      return 'audio/mpeg';
    } else if (url.includes('.jpg') || url.includes('.jpeg')) {
      return 'image/jpeg';
    } else if (url.includes('.png')) {
      return 'image/png';
    }

    return 'application/octet-stream';
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
