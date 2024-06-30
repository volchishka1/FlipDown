import { useCallback, useEffect, useState } from 'react';

import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';

import { DownloadScreenView } from './downloadScreenView';
import { Platform } from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';

export const DownloadScreen = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [photos, setPhotos] = useState<PhotoIdentifier[] | undefined>([]);
  const fetchPhotos = useCallback(async () => {
    const res = await CameraRoll.getPhotos({
      first: 100,
      assetType: 'Videos',
      groupTypes: 'Album',
      groupName: 'FlipTok',
      include: ['fileSize', 'playableDuration'],
    });
    setPhotos(res?.edges);
  }, []);

  const deleteFile = async () => {
    Platform.OS === 'android'
      ? ReactNativeBlobUtil.fs
          .unlink(url)
          .then()
          .catch((err) => {
            console.log(err);
          })
      : await CameraRoll.deletePhotos([url]);
    setUrl('');
  };

  useEffect(() => {
    fetchPhotos()
      .then()
      .catch(() => {});
  }, [fetchPhotos, photos]);

  return (
    <DownloadScreenView
      photos={photos}
      url={url}
      setUrl={setUrl}
      title={title}
      setTitle={setTitle}
      duration={duration}
      setDuration={setDuration}
      deleteFile={deleteFile}
    />
  );
};
