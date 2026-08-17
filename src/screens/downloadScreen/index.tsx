import { FC, useCallback, useState } from 'react';
import { CameraRoll, PhotoIdentifier } from '@react-native-camera-roll/camera-roll';
import { DownloadScreenView } from './DownloadScreenView.tsx';
import { ROUTES, strings } from '@constants';
import { CompositeScreenProps, useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { setUrl } from '@root/store/actions.ts';
import { useAppDispatch } from '@root/hooks/hooks.ts';
import { MusicTrack } from '@root/types/state.ts';
import { getSavedMusic } from '@root/services/musicService';
import { TabType } from '@screens/downloadScreen/types.ts';
import { Alert, Platform } from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import RNShare from 'react-native-share';

export type DownloadScreenComponentProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.DOWNLOAD_SCREEN>,
  any
>;

export const DownloadScreen: FC<DownloadScreenComponentProps> = ({ navigation }) => {
  const [photos, setPhotos] = useState<PhotoIdentifier[] | undefined>([]);
  const [musicTracks, setMusicTracks] = useState<MusicTrack[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('video');
  const [isLoadingMusic, setIsLoadingMusic] = useState(false);
  const dispatch = useAppDispatch();
  const fetchPhotos = useCallback(async () => {
    try {
      const res = await CameraRoll.getPhotos({
        first: 1000,
        assetType: 'Videos',
        groupTypes: 'Album',
        groupName: 'FlipDown',
        include: ['fileSize', 'playableDuration'],
      });
      setPhotos(res?.edges || []);
    } catch (error) {}
  }, []);

  const fetchMusic = useCallback(async () => {
    setIsLoadingMusic(true);
    try {
      const tracks = await getSavedMusic();
      setMusicTracks(tracks);
    } catch (error) {
      setMusicTracks([]);
    } finally {
      setIsLoadingMusic(false);
    }
  }, []);

  const navigateToFullVideoScreen = (img: any) => {
    dispatch(setUrl(img));
    navigation.navigate(ROUTES.FULL_VIDEO_SCREEN);
  };

  const deleteMusicFile = async (track: MusicTrack) => {
    try {
      if (Platform.OS === 'android') {
        const filePath = track.url.startsWith('file://')
          ? track.url.replace('file://', '')
          : track.url;

        await ReactNativeBlobUtil.fs.unlink(filePath);
      } else {
        const filePath = track.url.startsWith('file://')
          ? track.url.replace('file://', '')
          : track.url;

        await ReactNativeBlobUtil.fs.unlink(filePath);
      }

      await fetchMusic();
    } catch (error) {
      console.error('Error deleting music:', error);
      throw error;
    }
  };

  const confirmDeleteMusic = (track: MusicTrack) => {
    Alert.alert(`${strings.getString('do_you_want_to_delete_file')}`, `${track.title}`, [
      {
        isPreferred: true,
        text: `${strings.getString('yes')}`,
        onPress: () => {
          deleteMusicFile(track)
            .then(() => {
              Alert.alert(strings.getString('deleted_video'));
            })
            .catch((error) => {
              console.error('Delete error:', error);
              Alert.alert('Error', 'Failed to delete music');
            });
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

  const shareMusicFile = async (track: MusicTrack) => {
    try {
      let musicPath = track.url;

      if (musicPath.startsWith('file://')) {
        musicPath = musicPath.replace('file://', '');
      }

      if (Platform.OS === 'android' && musicPath.startsWith('/storage/')) {
        try {
          const fileName = `${track.title.replace(/[^a-zA-Z0-9]/g, '_')}.mp3`;
          const tempPath = `${ReactNativeBlobUtil.fs.dirs.CacheDir}/${fileName}`;

          await ReactNativeBlobUtil.fs.cp(musicPath, tempPath);

          const shareOptions = {
            url: `file://${tempPath}`,
            type: 'audio/mpeg',
            filename: fileName,
            showAppsToView: true,
            failOnCancel: false,
          };

          await RNShare.open(shareOptions);

          setTimeout(async () => {
            try {
              await ReactNativeBlobUtil.fs.unlink(tempPath);
            } catch (cleanupError) {
              console.log('Cleanup error:', cleanupError);
            }
          }, 1000);
        } catch (copyError) {
          console.error('Copy error:', copyError);

          const shareOptions = {
            url: `file://${musicPath}`,
            type: 'audio/mpeg',
            filename: `${track.title}.mp3`,
            showAppsToView: true,
            failOnCancel: false,
          };

          await RNShare.open(shareOptions);
        }
      } else {
        const shareOptions = {
          url: musicPath.startsWith('file://') ? musicPath : `file://${musicPath}`,
          type: 'audio/mpeg',
          filename: `${track.title}.mp3`,
          showAppsToView: true,
          failOnCancel: false,
        };

        await RNShare.open(shareOptions);
      }
    } catch (error) {
      console.error('Music share error:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPhotos();
      fetchMusic();

      return () => {};
    }, [fetchPhotos, fetchMusic]),
  );

  return (
    <DownloadScreenView
      photos={photos || []}
      musicTracks={musicTracks}
      isLoadingMusic={isLoadingMusic}
      navigateToFullVideoScreen={navigateToFullVideoScreen}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onDeleteMusic={confirmDeleteMusic}
      onShareMusic={shareMusicFile}
    />
  );
};
