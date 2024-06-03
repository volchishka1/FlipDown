import { Alert, PermissionsAndroid, Platform } from 'react-native';

import React, { useEffect, useState } from 'react';

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

  const getData = () => {
    const apiUrl = `https://fliptok.app/api/fetch?url=${link}`;
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(saveData(response.data));
      })
      .catch(() => {});
    link !== '' ? setIsLoad(true) : setIsLoad(false);
  };

  useEffect(() => {
    const allData = getDataRedux;
    setData(allData);
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
    const path = RNFetchBlob.fs.dirs.DocumentDir;
    const res = await RNFetchBlob.config({
      fileCache: true,
      path: path + '/sound.mp3',
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
    Alert.alert('Video added');
  };

  const dataRedux = () => {
    link !== '' ? setShowLoad(true) : setShowLoad(false);
    setIsLoad(false);
  };

  const saveMusic = () => {
    saveMusicOnPhone()
      .then()
      .catch(() => {});
  };
  const saveVideo = () => {
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
  };

  const setTextValue = () => {
    link !== '' ? setLink(link) : Alert.alert('Enter your link please');
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
