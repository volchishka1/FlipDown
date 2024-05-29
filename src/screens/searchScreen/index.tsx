import { Alert, PermissionsAndroid, Platform } from 'react-native';

import React, { useCallback, useEffect, useState } from 'react';

import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { saveData } from '../../store/actions';
import { getLoadData, getText } from '../../store/homeScreen/selectors';

import { SearchScreenView } from './searchScreenView';

export interface Data {
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

export const SearchScreen = () => {
  const [link, setLink] = useState('');
  const dispatch = useAppDispatch();
  const getInputText = useAppSelector(getText);
  const getDataRedux: Data[] = useAppSelector(getLoadData);
  const [data, setData] = useState<Data | undefined>();
  const [isLoad, setIsLoad] = useState(false);
  const [showLoad, setShowLoad] = useState(false);

  // const [hasPermission, setHasPermission] = useState<boolean>(false);
  //
  // const openSettingsAlert = useCallback(({ title }: { title: string }) => {
  //   Alert.alert(title, '', [
  //     {
  //       isPreferred: true,
  //       style: 'default',
  //       text: 'Open Settings',
  //       onPress: void (() => Linking?.openSettings()),
  //     },
  //     {
  //       isPreferred: false,
  //       style: 'destructive',
  //       text: 'Cancel',
  //       onPress: () => {},
  //     },
  //   ]);
  // }, []);
  //
  // const checkAndroidPermissions = useCallback(async () => {
  //   if (parseInt(Platform.Version as string, 10) >= 33) {
  //     const permissions = await Permissions.checkMultiple([
  //       PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
  //       PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
  //     ]);
  //     if (
  //       permissions[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === Permissions.RESULTS.GRANTED &&
  //       permissions[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] === Permissions.RESULTS.GRANTED
  //     ) {
  //       setHasPermission(true);
  //       return;
  //     }
  //     const res = await Permissions.requestMultiple([
  //       PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
  //       PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
  //     ]);
  //     if (
  //       res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === Permissions.RESULTS.GRANTED &&
  //       res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] === Permissions.RESULTS.GRANTED
  //     ) {
  //       setHasPermission(true);
  //     }
  //     if (
  //       res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === Permissions.RESULTS.DENIED ||
  //       res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] === Permissions.RESULTS.DENIED
  //     ) {
  //       checkAndroidPermissions();
  //     }
  //     if (
  //       res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === Permissions.RESULTS.BLOCKED ||
  //       res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] === Permissions.RESULTS.BLOCKED
  //     ) {
  //       openSettingsAlert({
  //         title: 'Please allow access to your photos and videos from settings',
  //       });
  //     }
  //   } else {
  //     const permission = await Permissions.check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  //     if (permission === Permissions.RESULTS.GRANTED) {
  //       setHasPermission(true);
  //       return;
  //     }
  //     const res = await Permissions.request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  //     if (res === Permissions.RESULTS.GRANTED) {
  //       setHasPermission(true);
  //     }
  //     if (res === Permissions.RESULTS.DENIED) {
  //       checkAndroidPermissions();
  //     }
  //     if (res === Permissions.RESULTS.BLOCKED) {
  //       openSettingsAlert({
  //         title: 'Please allow access to the photo library from settings',
  //       });
  //     }
  //   }
  // }, [openSettingsAlert]);
  //
  // const checkPermission = useCallback(async (): Promise<void> => {
  //   if (Platform.OS === 'ios') {
  //     const permission = await Permissions.check(PERMISSIONS.IOS.PHOTO_LIBRARY);
  //     if (
  //       permission === Permissions.RESULTS.GRANTED ||
  //       permission === Permissions.RESULTS.LIMITED
  //     ) {
  //       setHasPermission(true);
  //       return;
  //     }
  //     const res = await Permissions.request(PERMISSIONS.IOS.PHOTO_LIBRARY);
  //     if (res === Permissions.RESULTS.GRANTED || res === Permissions.RESULTS.LIMITED) {
  //       setHasPermission(true);
  //     }
  //     if (res === Permissions.RESULTS.BLOCKED) {
  //       openSettingsAlert({
  //         title: 'Please allow access to the photo library from settings',
  //       });
  //     }
  //   } else if (Platform.OS === 'android') {
  //     checkAndroidPermissions();
  //   }
  // }, [checkAndroidPermissions, openSettingsAlert]);
  //
  // useEffect(() => {
  //   checkPermission()
  //     .then(() => console.log('this will succeed'))
  //     .catch(() => {});
  // }, [checkPermission]);

  const getData = () => {
    const apiUrl = `https://fliptok.app/api/fetch?url=${link}`;
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(saveData(response.data));
      })
      .catch(() => {});
    setIsLoad(true);
  };

  useEffect(() => {
    setData(getDataRedux);
    console.log('getDataRedux', getDataRedux);
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

  const videoUrl = data?.download_video_url;
  let url = `https://tttcdn.online/?url=${videoUrl}&type=mp4`;
  const musicUrl = data?.download_music_url;
  let urlMusic = `https://tttcdn.online/?url=${musicUrl}&type=mp3`;
  console.log('lolIos', url);

  const saveMusicOnPhone = async (): Promise<void> => {
    const res = await RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp3',
    }).fetch('GET', urlMusic);
    urlMusic = res.path();
    console.log('UrlFetchMusic', urlMusic);
  };

  const saveImageOnPhone = async (): Promise<void> => {
    Platform.OS === 'android' && (await checkAndroidPermission());
    const res = await RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp4',
    }).fetch('GET', url);
    url = res.path();
    console.log('urlFetch', url);
    await CameraRoll.saveAsset(url, { type: 'video', album: 'FlipTok' });
  };

  const saveImageOnAndroid = useCallback(() => {
    Alert.alert('Do you want to save this video', '', [
      {
        isPreferred: true,
        text: 'Yes',
        onPress: () => {
          saveImageOnPhone()
            .then()
            .catch(() => {});
        },
        style: 'default',
      },
      {
        isPreferred: false,
        text: 'No',
        onPress: () => {},
        style: 'destructive',
      },
    ]);
  }, []);

  const dataRedux = () => {
    setShowLoad(true);
    setIsLoad(false);
  };

  const saveMusic = () => {
    saveMusicOnPhone()
      .then()
      .catch(() => {});
  };
  const saveVideo = () => {
    saveImageOnAndroid();
  };

  const setTextValue = () => {
    link !== '' ? setLink(link) : Alert.alert('Enter your link please');
    console.log(link);
  };

  const setInputValue = () => {
    setTextValue();
    getData();
    setTimeout(dataRedux, 3000);
  };

  return (
    <SearchScreenView
      saveMusic={saveMusic}
      saveVideo={saveVideo}
      preview={data?.video?.cover}
      link={link}
      setLink={setLink}
      setInputValue={setInputValue}
      isLoad={isLoad}
      showLoad={showLoad}
    />
  );
};
