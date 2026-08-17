import { Platform } from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { MusicTrack } from '../types/state';

export const getSavedMusic = async (): Promise<MusicTrack[]> => {
  try {
    if (Platform.OS === 'android') {
      return await getMusicFromAndroid();
    } else {
      return await getMusicFromIOS();
    }
  } catch (error) {
    console.error('Error getting saved music:', error);
    return [];
  }
};

const getMusicFromAndroid = async (): Promise<MusicTrack[]> => {
  try {
    const musicFolder = '/storage/emulated/0/Music/FlipDown';

    const exists = await ReactNativeBlobUtil.fs.exists(musicFolder);
    if (!exists) {
      return [];
    }

    const files = await ReactNativeBlobUtil.fs.ls(musicFolder);
    const mp3Files = files.filter(
      (file) => typeof file === 'string' && file.toLowerCase().endsWith('.mp3'),
    );

    const tracks: MusicTrack[] = mp3Files.map((file, index) => {
      const title = file.replace(/\.mp3$/i, '');
      const filePath = `${musicFolder}/${file}`;

      return {
        id: `local_${Date.now()}_${index}`,
        title: title,
        url: filePath,
        savedAt: new Date().toISOString(),
      };
    });

    return tracks;
  } catch (error) {
    console.error('Error getting Android music:', error);
    return [];
  }
};

const getMusicFromIOS = async (): Promise<MusicTrack[]> => {
  try {
    const documentsPath = ReactNativeBlobUtil.fs.dirs.DocumentDir;
    const flipDownPath = `${documentsPath}/FlipDown`;

    const exists = await ReactNativeBlobUtil.fs.exists(flipDownPath);
    if (!exists) {
      return [];
    }

    const files = await ReactNativeBlobUtil.fs.ls(flipDownPath);
    const mp3Files = files.filter((file) => file.endsWith('.mp3'));

    const tracks: MusicTrack[] = mp3Files.map((file, index) => {
      const title = file.replace('.mp3', '');
      return {
        id: `local_${Date.now()}_${index}`,
        title: title,
        url: `${flipDownPath}/${file}`,
        savedAt: new Date().toISOString(),
      };
    });

    return tracks;
  } catch (error) {
    console.error('Error getting iOS music:', error);
    return [];
  }
};
