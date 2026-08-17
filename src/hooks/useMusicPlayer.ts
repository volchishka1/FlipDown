import { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import Sound from 'react-native-sound';
import { MusicTrack } from '../types/state';

export const useMusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const soundRef = useRef<Sound | null>(null);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.release();
        soundRef.current = null;
      }
    };
  }, []);

  const playTrack = (track: MusicTrack) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        soundRef.current?.pause();
        setIsPlaying(false);
      } else {
        soundRef.current?.play((success) => {
          if (success) {
            setIsPlaying(false);
            setCurrentTrack(null);
          } else {
            Alert.alert('Error', 'Failed to play track');
            setIsPlaying(false);
          }
        });
        setIsPlaying(true);
      }
      return;
    }

    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.release();
      soundRef.current = null;
    }

    setCurrentTrack(track);
    setIsLoading(true);
    setIsPlaying(false);

    let trackUrl = track.url;

    if (!trackUrl.startsWith('file://') && !trackUrl.startsWith('http')) {
      trackUrl = `file://${trackUrl}`;
    }

    const sound = new Sound(trackUrl, '', (error) => {
      setIsLoading(false);
      if (error) {
        Alert.alert('Error', `Cannot load audio file: ${error.message}`);
        setCurrentTrack(null);
        return;
      }
      sound.play((success) => {
        if (success) {
          setIsPlaying(false);
          setCurrentTrack(null);
        } else {
          Alert.alert('Error', 'Failed to play track');
          setIsPlaying(false);
        }
      });
      setIsPlaying(true);
    });

    soundRef.current = sound;
  };

  const stopPlayback = () => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.release();
      soundRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTrack(null);
  };

  return {
    currentTrack,
    isPlaying,
    isLoading,
    playTrack,
    stopPlayback,
  };
};
