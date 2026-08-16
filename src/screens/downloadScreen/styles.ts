import { Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type DownloadScreenStyles = {
  saveAriaView: ViewStyle;
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  imageContainer: ViewStyle;
  textEmptyScreenContainer: ViewStyle;
  textEmptyScreen: TextStyle;
  button: ViewStyle;
  images: ImageStyle;
  videoStyle: ViewStyle;
  tabContainer: ViewStyle;
  tabButton: ViewStyle;
  activeTabButton: ViewStyle;
  tabText: TextStyle;
  activeTabText: TextStyle;
  musicListContainer: ViewStyle;
  musicItem: ViewStyle;
  activeMusicItem: ViewStyle;
  musicIconContainer: ViewStyle;
  musicIcon: TextStyle;
  musicInfo: ViewStyle;
  musicTitle: TextStyle;
  musicDate: TextStyle;
  musicArrow: TextStyle;
  playingIndicator: ViewStyle;
  playingBar: ViewStyle;
  nowPlayingContainer: ViewStyle;
  nowPlayingText: TextStyle;
  stopButton: ViewStyle;
  stopButtonText: TextStyle;
  musicItemContent: ViewStyle;
  musicActions: ViewStyle;
  actionButton: ViewStyle;
  actionButtonStyle: ViewStyle;
};

export const downloadScreenStyles = StyleSheet.create<DownloadScreenStyles>({
  videoContainer: {},
  videoStyle: {
    height: '100%',
    alignSelf: 'stretch',
  },
  saveAriaView: {
    backgroundColor: '#0b1d4d',
    flex: 1,
    paddingTop: 30,
  },
  rootContainer: {
    marginHorizontal: 1,
    marginTop: 10,
  },
  centerContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  textEmptyScreenContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textEmptyScreen: {
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
    fontSize: Dimensions.get('window').width > 600 ? 30 : 20,
  },
  images: {
    height: Dimensions.get('window').width > 600 ? 320 : 180,
    width: '100%',
  },
  imageContainer: {
    margin: Dimensions.get('window').width > 600 ? 2 : 1,
    borderRadius: 10,
    width: '32.6%',
    height: Dimensions.get('window').width > 600 ? 320 : 180,
  },
  button: {
    borderRadius: 7,
    height: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: '#ffffff',
  },
  tabText: {
    color: '#ffffff',
    fontFamily: 'Roboto-Medium',
    fontSize: Dimensions.get('window').width > 600 ? 18 : 16,
  },
  activeTabText: {
    color: '#0b1d4d',
    fontFamily: 'Roboto-Bold',
  },
  musicListContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  musicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  activeMusicItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  musicIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  musicIcon: {
    fontSize: 20,
  },
  musicInfo: {
    flex: 1,
  },
  musicTitle: {
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    marginBottom: 4,
  },
  musicDate: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  musicArrow: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 24,
    marginLeft: 8,
  },
  playingIndicator: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 20,
    marginLeft: 8,
    gap: 2,
  },
  playingBar: {
    width: 3,
    height: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 1.5,
  },
  nowPlayingContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nowPlayingText: {
    color: '#ffffff',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    flex: 1,
    marginRight: 12,
  },
  stopButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopButtonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  musicItemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicActions: {
    alignItems: 'center',
    paddingLeft: 12,
    gap: 22,
  },
  actionButton: {
    width: 18,
    height: 18,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonStyle: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
