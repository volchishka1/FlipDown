import { Alert, Appearance, Keyboard, PermissionsAndroid, Platform } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import React, { useEffect, useState } from 'react';

import { CameraRoll } from '@react-native-camera-roll/camera-roll';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  getIsLoad,
  getIsLoadMusic,
  getIsLoadVideo,
  getLoadData,
  getProvider,
  getShowLoad,
} from '../../store/homeScreen/selectors';

import { SearchScreenView } from './searchScreenView';
import ReactNativeBlobUtil from 'react-native-blob-util';

import { useNetInfo, NetInfoState } from '@react-native-community/netinfo';
import { strings } from '@constants';
import { textColorBlackStyles } from '@components/globalStyles/globalStyles';
import { MobileAds } from 'react-native-yandex-mobile-ads';
import { loadData } from '@root/store/api-actions.ts';
import { setIsLoadMusic, setIsLoadVideo } from '@root/store/actions.ts';
import ShareMenu, { ShareData } from 'react-native-share-menu';

export interface ResponseData {
  music: {
    id: string;
    title: string;
    url: string;
  };
  video: {
    id: string;
    title: string;
    cover: string;
    url: string;
  };
  download_music_url: string;
  download_video_url: string;
}

const bannerIds = {
  bannerYandexIosId: `${process.env.BANNER_YANDEX_IOS_ID}`,
  bannerYandexAndroidId: `${process.env.BANNER_YANDEX_ANDROID_ID}`,
  bannerGoogleIosId: `${process.env.BANNER_GOOGLE_IOS_ID}`,
  bannerGoogleAndroidId: `${process.env.BANNER_GOOGLE_ANDROID_ID}`,
};

export const SearchScreen = () => {
  const [link, setLink] = useState<string | string[]>('');
  const dispatch = useAppDispatch();
  const getDataRedux: ResponseData[] = useAppSelector(getLoadData);
  const getProviderRedux: string = useAppSelector(getProvider);
  const isLoad: boolean = useAppSelector(getIsLoad);
  const isLoadVideo: boolean = useAppSelector(getIsLoadVideo);
  const isLoadMusic: boolean = useAppSelector(getIsLoadMusic);
  const showLoad: boolean = useAppSelector(getShowLoad);
  const [data, setData] = useState<ResponseData | undefined>();

  const internetState: NetInfoState = useNetInfo();
  const colorScheme = Appearance.getColorScheme();
  const textInputColorText = colorScheme === 'dark' && textColorBlackStyles;

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setLink(text);
  };

  MobileAds.initialize({ userConsent: true, locationConsent: true });

  let bannerGoogleAdvId;
  let bannerYandexAdvId;

  Platform.OS === 'ios'
    ? (bannerYandexAdvId = bannerIds.bannerYandexIosId)
    : (bannerYandexAdvId = bannerIds.bannerYandexAndroidId);

  Platform.OS === 'ios'
    ? (bannerGoogleAdvId = bannerIds.bannerGoogleIosId)
    : (bannerGoogleAdvId = bannerIds.bannerGoogleAndroidId);

  useEffect(() => {
    setData(getDataRedux);
  }, [getDataRedux]);

  const checkAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve().catch(() => {});
    } catch (error) {
      Promise.reject(error).catch(() => {});
    }
  };

  useEffect(() => {
    Platform.OS === 'android' &&
      checkAndroidPermission()
        .then()
        .catch((err) => {
          console.log(err);
        });
  });

  const videoUrl = data?.download_video_url;
  let url = `https://tttcdn.online/?url=${videoUrl}&type=mp4`;
  const musicUrl = data?.download_music_url;
  let urlMusic = `https://tttcdn.online/?url=${musicUrl}&type=mp3`;
  const musicTitle = data?.music?.title;
  const videoId = data?.video?.id;

  const saveMusicOnAndroid = async (): Promise<void> => {
    const res = await ReactNativeBlobUtil.config({
      fileCache: true,
      appendExt: 'mp3',
    }).fetch('GET', url);
    await ReactNativeBlobUtil.MediaCollection.copyToMediaStore(
      {
        name: `${musicTitle}`, // name of the file
        parentFolder: 'FlipTok', // subdirectory in the Media Store, e.g. HawkIntech/Files to create a folder HawkIntech with a subfolder Files and save the image within this folder
        mimeType: 'audio/mpeg', // MIME type of the file
      },
      'Audio', // Media Collection to store the file in ("Audio" | "Image" | "Video" | "Download")
      res.path(), // Path to the file being copied in the apps own storage
    );
  };

  const saveMusicOnIos = async (): Promise<void> => {
    const path = ReactNativeBlobUtil.fs.dirs.DownloadDir + '/' + `${musicTitle}.mp3`;
    const res = await ReactNativeBlobUtil.config({
      fileCache: true,
      appendExt: 'mp3',
      path: path,
    }).fetch('GET', urlMusic);
    ReactNativeBlobUtil.ios.previewDocument(res.path());
  };

  const saveVideoOnPhone = async (): Promise<void> => {
    let path = ReactNativeBlobUtil.fs.dirs.MovieDir + videoId;
    const res = await ReactNativeBlobUtil.config({
      fileCache: true,
      appendExt: 'mp4',
      indicator: true,
    }).fetch('GET', url);
    Platform.OS === 'ios'
      ? (url = res.path()) && (await CameraRoll.saveAsset(url, { type: 'video', album: 'FlipTok' }))
      : await ReactNativeBlobUtil.MediaCollection.copyToMediaStore(
          {
            name: 'FlipTokVideo' + `${videoId}`, // name of the file
            parentFolder: 'FlipTok', // subdirectory in the Media Store, e.g. HawkIntech/Files to create a folder HawkIntech with a subfolder Files and save the image within this folder
            mimeType: 'video/mp4', // MIME type of the file
            path: path,
          },
          'Video', // Media Collection to store the file in ("Audio" | "Image" | "Video" | "Download")
          res.path(), // Path to the file being copied in the apps own storage
        );
  };

  const saveMusic = () => {
    Alert.alert(`${strings.getString('do_you_want_to_save_music')}`, '', [
      {
        isPreferred: true,
        text: `${strings.getString('yes')}`,
        onPress: () => {
          dispatch(setIsLoadMusic(true));
          setTimeout(() => {
            Platform.OS === 'android'
              ? saveMusicOnAndroid()
                  .then(() => {
                    dispatch(setIsLoadMusic(false));
                    Alert.alert(`${strings.getString('music_saved')}`);
                  })
                  .catch(() => {})
              : saveMusicOnIos()
                  .then(() => {
                    dispatch(setIsLoadMusic(false));
                  })
                  .catch(() => {});
          }, 3000);
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
  const saveVideo = () => {
    Alert.alert(`${strings.getString('do_you_want_to_save_video')}`, '', [
      {
        isPreferred: true,
        text: `${strings.getString('yes')}`,
        onPress: () => {
          dispatch(setIsLoadVideo(true));
          saveVideoOnPhone()
            .then(() => {
              Alert.alert(`${strings.getString('video_saved')}`);
              dispatch(setIsLoadVideo(false));
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

  const setTextValue = () => {
    if (link !== '') {
      setLink(link);
      dispatch(loadData(link, showLoad));
      Keyboard.dismiss();
    } else if (link === '') {
      Alert.alert(`${strings.getString('enter_your_link')}`);
    }
  };

  const setInputValue = () => {
    if (internetState.isConnected === false) {
      Alert.alert(`${strings.getString('no_internet')}`, `${strings.getString('sorry')}`, [
        { text: `${strings.getString('okay')}` },
      ]);
    } else {
      setTextValue();
    }
  };

  const handleShareToTheApp = (item: ShareData | undefined) => {
    if (!item) {
      return;
    }
    const { data } = item;

    setLink(data);
  };

  useEffect(() => {
    ShareMenu.getInitialShare(handleShareToTheApp);
  }, []);

  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShareToTheApp);
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <SearchScreenView
      saveMusic={saveMusic}
      saveVideo={saveVideo}
      preview={data?.video?.cover}
      link={link}
      provider={getProviderRedux}
      setLink={setLink}
      setInputValue={setInputValue}
      isLoad={isLoad}
      isLoadMusic={isLoadMusic}
      isLoadVideo={isLoadVideo}
      showLoad={showLoad}
      textInputColorText={textInputColorText}
      bannerGoogleAdvId={bannerGoogleAdvId}
      bannerYandexAdvId={bannerYandexAdvId}
      fetchCopiedText={fetchCopiedText}
    />
  );
};
