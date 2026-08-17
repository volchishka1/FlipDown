export type SearchScreenProps = {
  link: string | string[];
  provider: string;
  bannerGoogleAdvId: string;
  bannerYandexAdvId: string;
  setInputValue: () => void;
  saveVideo: () => void;
  saveMusic: () => void;
  fetchCopiedText: () => void;
  setLink: (arg: string) => void;
  preview: string | undefined;
  textInputColorText: {};
  isLoad: boolean;
  isLoadMusic: boolean;
  isLoadVideo: boolean;
  showLoad: boolean;
  showGradeModal: boolean;
  isPhotoMode?: boolean;
};
