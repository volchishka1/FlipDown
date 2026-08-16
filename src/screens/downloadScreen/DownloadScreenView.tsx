import { Image, Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native';
import { FC, useState } from 'react';
import { downloadScreenStyles } from './styles';
import { DownloadScreenProps, TabType } from './types';
import { MusicTrack } from '../../types/state';
import { strings } from '@constants';
import { useMusicPlayer } from '@root/hooks/useMusicPlayer';
import { CloseWindowComponent } from '@components/closeWindowComponent/closeWindowComponent.tsx';
import { ShareSvg } from '@assets/share.tsx';
import { BasketSvg } from '@assets/basket.tsx';

export const DownloadScreenView: FC<DownloadScreenProps> = (props) => {
  const {
    photos,
    musicTracks = [],
    isLoadingMusic = false,
    navigateToFullVideoScreen = () => {},
    onDeleteMusic = () => {},
    onShareMusic = () => {},
  } = props;

  console.log(photos);

  const [activeTab, setActiveTab] = useState<TabType>('video');
  const { currentTrack, isPlaying, isLoading, playTrack, stopPlayback } = useMusicPlayer();

  const renderMusicTab = () => {
    if (isLoadingMusic) {
      return (
        <View style={downloadScreenStyles.textEmptyScreenContainer}>
          <ActivityIndicator size='large' color='#ffffff' />
          <Text style={[downloadScreenStyles.textEmptyScreen, { marginTop: 16 }]}>
            Loading music...
          </Text>
        </View>
      );
    }

    if (!musicTracks || musicTracks.length === 0) {
      return (
        <View style={downloadScreenStyles.textEmptyScreenContainer}>
          <Text style={downloadScreenStyles.textEmptyScreen}>
            {strings.getString('screen_is_empty')}
          </Text>
        </View>
      );
    }

    return (
      <>
        <ScrollView style={downloadScreenStyles.rootContainer}>
          <View style={downloadScreenStyles.musicListContainer}>
            {musicTracks.map((track: MusicTrack, index: number) => {
              const isCurrentTrack = currentTrack?.id === track.id;

              return (
                <View
                  key={`${track.id}_${index}`}
                  style={[
                    downloadScreenStyles.musicItem,
                    isCurrentTrack && downloadScreenStyles.activeMusicItem,
                  ]}
                >
                  <TouchableOpacity
                    style={downloadScreenStyles.musicItemContent}
                    onPress={() => playTrack(track)}
                  >
                    <View style={downloadScreenStyles.musicIconContainer}>
                      {isLoading && isCurrentTrack ? (
                        <ActivityIndicator size='small' color='#ffffff' />
                      ) : (
                        <Text style={downloadScreenStyles.musicIcon}>
                          {isCurrentTrack && isPlaying ? '⏸' : '▶️'}
                        </Text>
                      )}
                    </View>
                    <View style={downloadScreenStyles.musicInfo}>
                      <Text style={downloadScreenStyles.musicTitle} numberOfLines={1}>
                        {track.title}
                      </Text>
                      <Text style={downloadScreenStyles.musicDate}>
                        {new Date(track.savedAt).toLocaleDateString()}
                      </Text>
                    </View>
                    {isCurrentTrack && isPlaying && (
                      <View style={downloadScreenStyles.playingIndicator}>
                        <View style={downloadScreenStyles.playingBar} />
                        <View style={[downloadScreenStyles.playingBar, { height: 8 }]} />
                        <View style={[downloadScreenStyles.playingBar, { height: 12 }]} />
                        <View style={[downloadScreenStyles.playingBar, { height: 6 }]} />
                      </View>
                    )}
                  </TouchableOpacity>

                  <View style={downloadScreenStyles.musicActions}>
                    <CloseWindowComponent
                      iconSvg={<ShareSvg />}
                      goToCloseButton={() => onShareMusic(track)}
                      style={downloadScreenStyles.actionButton}
                      buttonStyle={downloadScreenStyles.actionButtonStyle}
                    />
                    <CloseWindowComponent
                      iconSvg={<BasketSvg />}
                      goToCloseButton={() => onDeleteMusic(track)}
                      style={downloadScreenStyles.actionButton}
                      buttonStyle={downloadScreenStyles.actionButtonStyle}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        {currentTrack && (
          <View style={downloadScreenStyles.nowPlayingContainer}>
            <Text style={downloadScreenStyles.nowPlayingText} numberOfLines={1}>
              {isPlaying ? 'Now Playing: ' : 'Paused: '}
              {currentTrack.title}
            </Text>
            <TouchableOpacity style={downloadScreenStyles.stopButton} onPress={stopPlayback}>
              <Text style={downloadScreenStyles.stopButtonText}>⏹</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  };

  const renderVideoTab = () => {
    if (!photos || photos.length === 0) {
      return (
        <View style={downloadScreenStyles.textEmptyScreenContainer}>
          <Text style={downloadScreenStyles.textEmptyScreen}>
            {strings.getString('screen_is_empty')}
          </Text>
        </View>
      );
    }

    return (
      <ScrollView style={downloadScreenStyles.rootContainer}>
        <View style={downloadScreenStyles.centerContainer}>
          {photos.map((img: any) => (
            <TouchableOpacity
              style={downloadScreenStyles.imageContainer}
              key={img?.node?.image?.uri}
              onPress={() => {
                navigateToFullVideoScreen(img.node.image.uri);
              }}
            >
              <Image style={downloadScreenStyles.images} source={{ uri: img.node.image.uri }} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={downloadScreenStyles.saveAriaView}>
      <View style={downloadScreenStyles.tabContainer}>
        <TouchableOpacity
          style={[
            downloadScreenStyles.tabButton,
            activeTab === 'video' && downloadScreenStyles.activeTabButton,
          ]}
          onPress={() => {
            setActiveTab('video');
            stopPlayback();
          }}
        >
          <Text
            style={[
              downloadScreenStyles.tabText,
              activeTab === 'video' && downloadScreenStyles.activeTabText,
            ]}
          >
            {strings.getString('video')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            downloadScreenStyles.tabButton,
            activeTab === 'music' && downloadScreenStyles.activeTabButton,
          ]}
          onPress={() => setActiveTab('music')}
        >
          <Text
            style={[
              downloadScreenStyles.tabText,
              activeTab === 'music' && downloadScreenStyles.activeTabText,
            ]}
          >
            {strings.getString('music')}
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'video' ? renderVideoTab() : renderMusicTab()}
    </View>
  );
};
