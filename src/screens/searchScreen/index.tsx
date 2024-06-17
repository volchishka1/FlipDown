import { Alert, PermissionsAndroid, Platform } from 'react-native';

import React, { useEffect, useState } from 'react';

import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { saveData } from '../../store/actions';
import { getLoadData, getStatus } from '../../store/homeScreen/selectors';

import { SearchScreenView } from './searchScreenView';

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

export const SearchScreen = () => {
  const [link, setLink] = useState('');
  const dispatch = useAppDispatch();
  const responseStatus = useAppSelector(getStatus);
  const getDataRedux: ResponseData[] = useAppSelector(getLoadData);
  const [data, setData] = useState<ResponseData | undefined>();
  const [isLoad, setIsLoad] = useState(false);
  const [showLoad, setShowLoad] = useState(false);

  const getData = async (): Promise<void> => {
    const apiUrl = `https://fliptok.app/api/fetch?url=${link}`;
    const response = await axios.get(apiUrl);
    const res = response.data;
    const resStatus = response.status;
    if (resStatus) {
      dispatch(saveData(res));
      setIsLoad(true);
      setTimeout(() => {
        setShowLoad(true);
        setIsLoad(false);
      }, 3000);
    } else {
      Alert.alert('Oops');
    }
  };

  useEffect(() => {
    const allData = getDataRedux;
    setData(allData);
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
  const musicTitle = data?.music?.title;
  console.log('musicUrl', urlMusic);

  const saveMusicOnAndroid = async (): Promise<void> => {
    await checkAndroidPermission();
    const path = RNFetchBlob.fs.dirs.DownloadDir + '/' + `${musicTitle}.mp3`;

    const res = await RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp3',
      path: path,
      addAndroidDownloads: {
        // useDownloadManager: true,
        mediaScannable: true,
        notification: true,
        title: path,
        description: `Downloading${path}`,
        mime: 'audio/mpeg',
      },
    }).fetch('GET', urlMusic);
    urlMusic = res.path();
    console.log('UrlFetchMusic', urlMusic);
  };

  const saveMusicOnIos = async (): Promise<void> => {
    const path = RNFetchBlob.fs.dirs.DownloadDir + '/' + `${musicTitle}` + '/sound.mp3';
    const res = await RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp3',
      path: path,
    }).fetch('GET', urlMusic);
    urlMusic = res.path();
    console.log('UrlFetchMusic', urlMusic);
  };

  const saveVideoOnPhone = async (): Promise<void> => {
    Platform.OS === 'android' && (await checkAndroidPermission());
    const res = await RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp4',
      indicator: true,
    }).fetch('GET', url);
    url = res.path();
    console.log('urlFetch', url);
    await CameraRoll.saveAsset(url, { type: 'video', album: 'FlipTok' });
    Alert.alert('Video added');
  };

  const saveMusic = () => {
    Platform.OS === 'android'
      ? saveMusicOnAndroid()
          .then()
          .catch(() => {})
      : saveMusicOnIos()
          .then()
          .catch(() => {});
  };
  const saveVideo = () => {
    Alert.alert('Do you want to save this video', '', [
      {
        isPreferred: true,
        text: 'Yes',
        onPress: () => {
          saveVideoOnPhone()
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
  };

  const setTextValue = () => {
    if (link.length === 32) {
      setLink(link);
      getData()
        .then()
        .catch((err: string) => {
          Alert.alert(err);
        });
    } else if (link === '') {
      Alert.alert('Enter your link. Example: https://vm.tiktok.com/ZMr8THxT2/');
    } else {
      Alert.alert('Enter your link correctly. Example: https://vm.tiktok.com/ZMr8THxT2/');
    }
  };

  const setInputValue = () => {
    setTextValue();
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
