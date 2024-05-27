import { Alert, PermissionsAndroid, Platform } from 'react-native';

import React, { useCallback, useState } from 'react';

import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addIsActive, saveData, setText } from '../../store/actions';
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

  // const getData = () => {
  //   const apiUrl = `https://fliptok.app/api/fetch?url=${getInputText}`;
  //   axios
  //     .get(apiUrl)
  //     .then((resp) => {
  //       const allPersons = resp.data;
  //       dispatch(saveData(allPersons));
  //       console.log('allPersons', allPersons);
  //     })
  //     .catch(() => {});
  // };

  const getData = async () => {
    const apiUrl = `https://fliptok.app/api/fetch?url=${getInputText}`;
    const response = await axios.get(apiUrl);
    const allPersons = response.data;
    dispatch(saveData(allPersons));
  };

  const checkAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve().catch(() => {});
    } catch (error) {
      Promise.reject(error).catch(() => {});
    }
  };

  let url = `https://tttcdn.online/?url=${data?.download_video_url}&type=mp4`;
  console.log('lolIos', url);

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
          saveImageOnPhone();
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
    const dataOfRedux = getDataRedux;
    setData(dataOfRedux);
    console.log('data', data);
    setIsLoad(false);
    setShowLoad(true);
  };

  const saveMusic = () => {
    Alert.alert(`${data?.music?.url}`);
  };
  const saveVideo = () => {
    saveImageOnAndroid();
  };

  const setTextValue = () => {
    link ? dispatch(setText(link)) : Alert.alert('Enter your link please');
  };

  const setInputValue = () => {
    getData()
      .then()
      .catch(() => {});
    setTextValue();
    dispatch(addIsActive(true));
    setTimeout(dataRedux, 3000);
    setIsLoad(true);
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
