import { MusicTrack } from '@root/types/state.ts';

export type TabType = 'video' | 'music';

export interface DownloadScreenProps {
  photos: any[];
  musicTracks: MusicTrack[];
  isLoadingMusic: boolean;
  activeTab: TabType;
  setActiveTab: (activeTab: TabType) => void;
  navigateToFullVideoScreen: (uri: string) => void;
  onDeleteMusic?: (track: MusicTrack) => void;
  onShareMusic?: (track: MusicTrack) => void;
}
