import { useCallback, useEffect, useState } from 'react';

import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';

import { DownloadScreenView } from './downloadScreenView';
import { Alert, Platform } from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { strings } from '@constants';

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

  const deleteFiles = async () => {
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

  const deleteFile = () => {
    Alert.alert(`${strings.getString('do_you_want_to_delete_file')}`, '', [
      {
        isPreferred: true,
        text: `${strings.getString('yes')}`,
        onPress: () => {
          deleteFiles()
            .then()
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
