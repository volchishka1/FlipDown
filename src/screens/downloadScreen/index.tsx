import { useCallback, useEffect, useState } from 'react';

import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';

import { DownloadScreenView } from './downloadScreenView';

export const DownloadScreen = () => {
  const [photos, setPhotos] = useState<PhotoIdentifier[] | undefined>([]);
  const fetchPhotos = useCallback(async () => {
    const res = await CameraRoll.getPhotos({
      first: 100,
      assetType: 'Videos',
      groupTypes: 'Album',
      groupName: 'FlipTok',
    });
    setPhotos(res?.edges);
  }, []);

  useEffect(() => {
    fetchPhotos()
      .then()
      .catch(() => {});
  }, [fetchPhotos, photos]);

  return <DownloadScreenView photos={photos} />;
};
